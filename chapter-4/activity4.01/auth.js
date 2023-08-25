"use strict";
// Autentication system that would pass login data to the backend API to register and sign users into our basketball scoreboard application
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    constructor(args) {
        this.email = args.email;
        this.password = args.password;
    }
}
class Auth {
    constructor(args) {
        this.user = args.user;
        this.source = args.source;
    }
    validUser() {
        const { email, password } = this.user;
        if (email === "admin@example.com" && password === "secret123") {
            return "Validating user ... User is authenticated: true";
        }
        return " Validating user ... User is not authenticated: false";
    }
}
exports.default = Auth;
// a_user for authenticated user and una_User for unathenticated user
const authenticated_User = new Login({
    email: "admin@example.com",
    password: "secret123"
});
const unauthenticated_User = new Login({
    email: "admin@example.com",
    password: "secret"
});
const authAttemptFromA_User = new Auth({
    user: authenticated_User,
    source: "Google"
});
console.log(authAttemptFromA_User.validUser());
const authAttemptFromUna_User = new Auth({
    user: unauthenticated_User,
    source: "Google"
});
console.log(authAttemptFromUna_User.validUser());
