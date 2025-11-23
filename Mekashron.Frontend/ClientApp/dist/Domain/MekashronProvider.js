var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MekashronLoginResponse } from "./MekashronResponses/MekashronLoginResponse";
import { MekashronRegisterResponse } from "./MekashronResponses/MekashronRegisterResponse";
const apiBase = '/api/mekashronauth';
export class MekashronProvider {
    static login(loginBlank) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiBase}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginBlank)
            });
            if (!res.ok)
                throw new Error(`Login failed: ${res.status}`);
            const json = yield res.json();
            return new MekashronLoginResponse(json.resultCode, json.resultMessage, json.entityId, json.firstName, json.lastName, json.company, json.address, json.city, json.country, json.zip, json.phone, json.mobile, json.email, json.emailConfirm, json.mobileConfirm, json.countryID, json.status, json.lid, json.fTPHost, json.fTPPort);
        });
    }
    static register(customerBlank) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${apiBase}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(customerBlank)
            });
            if (!res.ok)
                throw new Error(`Register failed: ${res.status}`);
            const json = yield res.json();
            return new MekashronRegisterResponse(json.resultCode, json.resultMessage, json.entityId, json.affiliateResultCode, json.affiliateResultMessage);
        });
    }
}
//# sourceMappingURL=MekashronProvider.js.map