"use strict";
// crating a constructor extention decorator factory for Token decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Teacher = class Teacher {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};
Teacher = __decorate([
    Token(true),
    __metadata("design:paramtypes", [Number, String])
], Teacher);
function Token(hasToken) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.token = hasToken;
            }
        };
    };
}
const teacher = new Teacher(1, "John Smith");
// console.log("Do you have a token:", teacher["token"]);
console.log("do you have a token property", teacher.hasOwnProperty("token"));
