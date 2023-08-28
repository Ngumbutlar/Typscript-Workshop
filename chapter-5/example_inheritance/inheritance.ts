class UserOne {
    email: string = "";
    createDate: number = 0;
    lastLogiin: number = 0;
    private token: string = ""

    setToken(token: string): void {
        //set user token
        this.token = token;
    }
    resetPassword(password: string): string {
        //return string of new password
        return password;

    }
}

class AdminUser extends UserOne {
    //page admin has access to
    // constructor(email: string) {
    //     super()
    //     this.email = email;
    // };

    adminPages: string[] = ["admin", "settings"];

    //method that allows the admin to reset other users
    resetUserPassword(email: string): string {
        //return default user password
        return "password123"
    }
}

class SuperAdmin extends AdminUser {
    superPages: string[] = ["super", "ultimate"];
    readonly myHash: string;

    constructor() {
        super()
        this.myHash = '123456'
    }
    createAdminUser(adminUser: AdminUser): AdminUser {
        return adminUser;
    }

    resetPassword(password: string): string {
        return password + this.myHash
    }
}

//create an instance of our child class
const adminUser: AdminUser = new AdminUser();

//create a string to hold props
let propString = '';

//loop through your props and appends prop name tp prpString
for (let u in adminUser) {
    propString += u + ','
}

console.log(propString)

const superAdmin = new SuperAdmin();
const newAdmin = new AdminUser();
console.log(superAdmin.resetPassword('iampassword'));
console.log(newAdmin.resetPassword('iampassowrd'));