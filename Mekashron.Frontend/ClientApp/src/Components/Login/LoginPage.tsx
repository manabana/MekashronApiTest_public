import { ReactNode, useState } from "react";
import { TextField } from "../Inputs/TextField";
import { LoginBlank } from "../../Domain/LoginBlank";
import { PasswordField } from "../Inputs/PasswordField";
import { Button } from "react-bootstrap";
import { MekashronProvider } from "../../Domain/MekashronProvider";
import { CustomAlert } from "../CustomAlert";
import './LoginPage.css';
import { Variant } from "react-bootstrap/esm/types";
import { StringTools } from "../../Tools/StringTools";

export function LoginPage() {
    const [loginBlank, setLoginBlank] = useState<LoginBlank>(LoginBlank.empty())
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const [alertData, setAlertData] = useState<{ title: string, message: string | ReactNode, variant: Variant }>({ title: '', message: '', variant: '' });

    async function loginUser() {
        try {
            const loginBlankValidationResult = loginBlankValidation();
            if (!loginBlankValidationResult.valid) return mountAlert('Ошибка', loginBlankValidationResult.message, 'danger');// TODO

            const result = await MekashronProvider.login(loginBlank);
            mountAlert('Ответ от API Mekashron',
                <>
                    <p>ResultCode: {result.resultCode ?? '-'}</p>
                    <p>ResultMessage: {result.resultMessage ?? '-'}</p>
                    {
                        result.resultCode === 0 &&
                        <>
                            <hr />
                            <p>EntityId: {result.entityId ?? '-'}</p>
                            <p>FirstName: {result.firstName ?? '-'}</p>
                            <p>LastName: {result.lastName ?? '-'}</p>
                            <p>Company: {result.company ?? '-'}</p>
                            <p>Address: {result.address ?? '-'}</p>
                            <p>City: {result.city ?? '-'}</p>
                            <p>Country: {result.country ?? '-'}</p>
                            <p>Zip: {result.zip ?? '-'}</p>
                            <p>Phone: {result.phone ?? '-'}</p>
                            <p>Mobile: {result.mobile ?? '-'}</p>
                            <p>Email: {result.email ?? '-'}</p>
                            <p>EmailConfirm: {result.emailConfirm ?? '-'}</p>
                            <p>MobileConfirm: {result.mobileConfirm ?? '-'}</p>
                            <p>CountryID: {result.countryID ?? '-'}</p>
                            <p>Status: {result.status ?? '-'}</p>
                            <p>LID: {result.lid ?? '-'}</p>
                            <p>FTPHost: {result.fTPHost ?? '-'}</p>
                            <p>FTPPort: {result.fTPPort ?? '-'}</p>

                        </>
                    }
                </>,
                result.resultCode === 0 ? 'success' : 'warning'
            );
        }
        catch {
            mountAlert('Ошибка', 'Произошла ошибка при попытке входа.', 'danger');
        }
        finally {

        }
    }

    function loginBlankValidation(): { valid: boolean, message: string } {
        //login
        if (StringTools.isNullOrWhiteSpace(loginBlank.username))
            return { valid: false, message: 'Введите логин' };
        //password
        if (StringTools.isNullOrWhiteSpace(loginBlank.password))
            return { valid: false, message: 'Введите пароль' };

        return { valid: true, message: '' }
    }

    function mountAlert(title: string, message: string | ReactNode, variant: Variant) {

        setShowAlert(true);
        setAlertData({ title, message, variant });
    }

    return (
        <div className="d-flex justify-content-center py-4">
            <div className="d-flex flex-column login-wrapper rounded gap-3">
                <h2>Sign In</h2>

                <TextField
                    label="Username"
                    text={loginBlank.username}
                    onChange={username => setLoginBlank({ ...loginBlank, username })}
                />
                <PasswordField
                    label="Password"
                    password={loginBlank.password}
                    onChange={password => setLoginBlank({ ...loginBlank, password })}
                />

                <Button onClick={() => loginUser()}>Sign In</Button>

                <CustomAlert
                    show={showAlert}
                    message={alertData.message}
                    title={alertData.title}
                    variant={alertData.variant}
                    onClose={() => setShowAlert(false)}
                />
            </div>
        </div>
    )
}