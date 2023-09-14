"use strict";
// creating a constructor wrapping decorator 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Teacher2 = class Teacher2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log("constructing a teacher");
    }
};
Teacher2 = __decorate([
    LogClass("Teacher decorator"),
    __metadata("design:paramtypes", [Number, String])
], Teacher2);
const teacher2 = new Teacher2(1, " John");
function LogClass(message) {
    return function (constructor) {
        const loggingConstructor = function (...args) {
            logger.info(message);
            return new constructor(...args);
        };
        loggingConstructor.prottotype = constructor.prototype;
        return loggingConstructor;
    };
}
const logger = {
    info: (message) => {
        console.log(`[INFO]: ${message}`);
    },
};
for (let index = 0; index < 10; index++) {
    const teacher = new Teacher2(index + 1, "LouAnne JOhnson");
}
