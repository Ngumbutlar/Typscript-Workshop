// crating a constructor extention decorator factory for Token decorator

@Token(true)
class Teacher {
    constructor(public id: number, public name: string) {}
}

type Constructable = {new(...args: any[]): {}};

function Token(hasToken: boolean) {
    return function <T extends Constructable>( constructor: T) {
        return class extends constructor {
            token: boolean = hasToken;
        }
    }
}

const teacher = new Teacher(1, "John Smith"); 
// console.log("Do you have a token:", teacher["token"]);
console.log("do you have a token property", teacher.hasOwnProperty("token"));