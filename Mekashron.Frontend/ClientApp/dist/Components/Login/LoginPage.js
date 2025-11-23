var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { TextField } from "../Inputs/TextField";
import { LoginBlank } from "../../Domain/LoginBlank";
import { PasswordField } from "../Inputs/PasswordField";
import { Button } from "react-bootstrap";
import { MekashronProvider } from "../../Domain/MekashronProvider";
import { CustomAlert } from "../CustomAlert";
import './LoginPage.css';
export function LoginPage() {
    const [loginBlank, setLoginBlank] = useState(LoginBlank.empty());
    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState({ title: '', message: '', variant: '' });
    function loginUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield MekashronProvider.login(loginBlank);
                mountAlert('Ответ от API Mekashron', `${JSON.stringify(loginBlank)}`, 'success');
            }
            catch (_a) {
                mountAlert('Ошибка', 'Произошла ошибка при попытке входа.', 'danger');
            }
            finally {
            }
        });
    }
    function mountAlert(title, message, variant) {
        setShowAlert(true);
        setAlertData({ title, message, variant });
    }
    return (_jsx("div", { className: "d-flex justify-content-center py-4", children: _jsxs("div", { className: "d-flex flex-column w-100 login-wrapper rounded", children: [_jsx("h2", { children: "Sign In" }), _jsx(TextField, { label: "Username", text: loginBlank.username, onChange: username => setLoginBlank(Object.assign(Object.assign({}, loginBlank), { username })) }), _jsx(PasswordField, { label: "Password", password: loginBlank.password, onChange: password => setLoginBlank(Object.assign(Object.assign({}, loginBlank), { password })) }), _jsx(Button, { onClick: () => loginUser(), children: "Sign In" }), _jsx(CustomAlert, { show: showAlert, message: alertData.message, title: alertData.title, onClose: () => setShowAlert(false) })] }) }));
}
//# sourceMappingURL=LoginPage.js.map