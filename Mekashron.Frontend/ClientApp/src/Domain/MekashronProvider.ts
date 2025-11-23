import { CustomerBlank } from "./CustomerBlank";
import { LoginBlank } from "./LoginBlank";
import { MekashronLoginResponse } from "./MekashronResponses/MekashronLoginResponse";
import { MekashronRegisterResponse } from "./MekashronResponses/MekashronRegisterResponse";

const apiBase = '/api/mekashronauth';

export class MekashronProvider {

    static async login(loginBlank: LoginBlank): Promise<MekashronLoginResponse> {
        const res = await fetch(`${apiBase}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginBlank)
        });

        if (!res.ok) throw new Error(`Login failed: ${res.status}`);

        const json = await res.json();

        return new MekashronLoginResponse(
            json.resultCode,
            json.resultMessage,
            json.entityId,
            json.firstName,
            json.lastName,
            json.company,
            json.address,
            json.city,
            json.country,
            json.zip,
            json.phone,
            json.mobile,
            json.email,
            json.emailConfirm,
            json.mobileConfirm,
            json.countryID,
            json.status,
            json.lid,
            json.fTPHost,
            json.fTPPort
        );
    }

    static async register(customerBlank: CustomerBlank): Promise<MekashronRegisterResponse> {
        const res = await fetch(`${apiBase}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customerBlank)
        });

        if (!res.ok) throw new Error(`Register failed: ${res.status}`);

        const json = await res.json();
        return new MekashronRegisterResponse(json.resultCode, json.resultMessage, json.entityId, json.affiliateResultCode, json.affiliateResultMessage);
    }
}