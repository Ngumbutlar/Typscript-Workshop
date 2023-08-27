"use strict";
class UserClass {
    // constructor(user: UserObject){
    //     this.user = user
    // }
    getUser() {
        return this.user;
    }
    ;
    login(user, password) {
        return this.user = user;
    }
    ;
}
const newUser = new UserClass();
const User = {
    email: "home@home.com",
    loginAt: new Date().getTime(),
    token: "123456"
};
console.log(newUser.login(User, "password"));
console.log(newUser.getUser());
