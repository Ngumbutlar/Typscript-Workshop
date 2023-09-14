"use strict";
class Person1 {
    constructor(firstName1, lastName1, birthday) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        this.birthday = birthday;
        this._title = "";
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    getFullName() {
        return `${this.firstName1}  ${this.lastName1}`;
    }
    getAge() {
        const now = new Date();
        return now.getFullYear() - this.birthday.getFullYear();
    }
}
const count1 = {};
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
