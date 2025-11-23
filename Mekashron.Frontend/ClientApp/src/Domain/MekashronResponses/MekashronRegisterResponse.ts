export class MekashronRegisterResponse {
    constructor(
        public resultCode: number,
        public resultMessage: string,
        public entityId: number,
        public affiliateResultCode: number,
        public affiliateResultMessage: string
    ) { }
}