"use strict";
class UserOne {
    constructor() {
        this.email = "";
        this.createDate = 0;
        this.lastLogiin = 0;
        this.token = "";
    }
    setToken(token) {
        //set user token
        this.token = token;
    }
    resetPassword(password) {
        //return string of new password
        return password;
    }
}
class AdminUser extends UserOne {
    constructor() {
        //page admin has access to
        // constructor(email: string) {
        //     super()
        //     this.email = email;
        // };
        super(...arguments);
        this.adminPages = ["admin", "settings"];
    }
    //method that allows the admin to reset other users
    resetUserPassword(email) {
        //return default user password
        return "password123";
    }
}
class SuperAdmin extends AdminUser {
    constructor() {
        super();
        this.superPages = ["super", "ultimate"];
        this.myHash = '123456';
    }
    createAdminUser(adminUser) {
        return adminUser;
    }
    resetPassword(password) {
        return password + this.myHash;
    }
}
//create an instance of our child class
const adminUser = new AdminUser();
//create a string to hold props
let propString = '';
//loop through your props and appends prop name tp prpString
for (let u in adminUser) {
    propString += u + ',';
}
console.log(propString);
const superAdmin = new SuperAdmin();
const newAdmin = new AdminUser();
console.log(superAdmin.resetPassword('iampassword'));
console.log(newAdmin.resetPassword('iampassowrd'));
