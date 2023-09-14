//simple class decorator factory

@Token(true)
class Teacher_ {
    constructor (public id: number, public name: string) {}
    //teacher specific code 
}

function Token1 (constructor: Function){
    constructor.prototype.token = true;
}

const teacher_ = new Teacher_(1, " John Smith");
// console.log("Does the teacher have a token?", teacher['token']);

@Token2(false)
class Student {
    constructor (public id: number, public name: string) {}
}

function Token2(hasToken: boolean){
    return function (constructor: Function){
        constructor.prototype.token = hasToken;
    }
}
const student = new Student(101, "John Bender");
// console.log("Does the teacher have a token?", student['token']);