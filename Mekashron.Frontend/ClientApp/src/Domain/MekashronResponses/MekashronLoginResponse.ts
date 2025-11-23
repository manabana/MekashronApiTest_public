export class MekashronLoginResponse {
    constructor(
        public resultCode: number,
        public resultMessage: number,

        public entityId: number | null,
        public firstName: string | null,
        public lastName: string | null,
        public company: string | null,
        public address: string | null,
        public city: string | null,
        public country: string | null,
        public zip: string | null,
        public phone: string | null,
        public mobile: string | null,
        public email: string | null,
        public emailConfirm: number | null,
        public mobileConfirm: number | null,
        public countryID: number | null,
        public status: number | null,
        public lid: string | null,
        public fTPHost: string | null,
        public fTPPort: number | null
    ) { }
}