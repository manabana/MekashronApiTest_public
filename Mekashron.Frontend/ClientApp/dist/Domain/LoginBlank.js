export class LoginBlank {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
(function (LoginBlank) {
    function empty() {
        return new LoginBlank("", "");
    }
    LoginBlank.empty = empty;
})(LoginBlank || (LoginBlank = {}));
//# sourceMappingURL=LoginBlank.js.map