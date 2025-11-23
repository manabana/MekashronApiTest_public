export class CustomerBlank {
    constructor(
        public email: string | null,
        public password: string | null,
        public firstName: string | null,
        public lastName: string | null,
        public phoneNumber: string | null,
        public countryId: number | null
    ) { }
}