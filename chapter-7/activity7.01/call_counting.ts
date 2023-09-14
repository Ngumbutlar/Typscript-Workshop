

class Person1 {
    constructor(public firstName1: string, public lastName1: string, public birthday: Date) {

    }

    private _title: string = "";

    public get title(){
        return this._title;
    }

    public set title(value:string){
         this._title = value;
    }

    public getFullName(){
        return `${this.firstName1}  ${this.lastName1}`

    }

    public getAge(){
        const now = new Date();
        return now.getFullYear() - this.birthday.getFullYear();
    }
}

const count1 = {};

type Constructable1 = {new (...args: any[]): {}};

// function countClass(counterName: string) {
//     return function <T extends Constructable1>(constructor: T) {
//         const result = new constructor(...args);
//         if (count1[counterName]) {
//             count1[counterName] +=1;
//         }else {
//             count1[counterName] = 1;
//         }
//         return result;
//     };

//     wrappedConstructor.prototype = constructor.prototype;
//     return wrappedConstructor;
// }