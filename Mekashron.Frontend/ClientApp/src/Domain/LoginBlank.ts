export class LoginBlank {
    constructor(
        public username: string,
        public password: string
    ) { }
}

export namespace LoginBlank {
    export function empty(): LoginBlank {
        return new LoginBlank("", "");
    }
}