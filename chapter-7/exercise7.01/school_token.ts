// simple class decorator factory

@Token(true)
class Teacher {
    constructor (public id: number, public name: string) {}
    //teacher specific code 
}

function Token (constructor: Function){
    constructor.prototype.token = true;
}

const teacher = new Teacher(1, " John Smith");
console.log("Does the teacher have a token?", teacher['token']);

@Token(false)
class Student {
    constructor (public id: number, public name: string) {}
}

function Token(hasToken: boolean){
    return function (constructor: Function) {
        constructor.prototype.token = hasToken;
    }
}
const student = new Student(101, "John Bender");
console.log("Does the teacher have a token?", student['token']);