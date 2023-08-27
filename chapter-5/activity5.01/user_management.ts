
interface UserObject {
    email: string;
    loginAt?: number;
    token?: string
}

interface UserClassInterface {
    user: UserObject;
    getUser(): UserObject;
    login(user: UserObject, password: string): UserObject;
}

class UserClass implements UserClassInterface {
    user!: UserObject;
    // constructor(user: UserObject){
    //     this.user = user
    // }

    getUser(): UserObject {
        return this.user
    };
    login(user: UserObject, password: string): UserObject {
        return this.user = user;
    };
}

const newUser: UserClassInterface = new UserClass();

const User: UserObject = {
    email: "home@home.com",
    loginAt: new Date().getTime(),
    token: "123456"

};

console.log(newUser.login(User, "password"));
console.log(newUser.getUser());
