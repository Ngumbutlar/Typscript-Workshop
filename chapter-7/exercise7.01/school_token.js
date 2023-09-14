"use strict";
//simple class decorator factory
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Teacher_ = class Teacher_ {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};
Teacher_ = __decorate([
    Token(true),
    __metadata("design:paramtypes", [Number, String])
], Teacher_);
function Token1(constructor) {
    constructor.prototype.token = true;
}
const teacher_ = new Teacher_(1, " John Smith");
// console.log("Does the teacher have a token?", teacher['token']);
let Student = class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};
Student = __decorate([
    Token2(false),
    __metadata("design:paramtypes", [Number, String])
], Student);
function Token2(hasToken) {
    return function (constructor) {
        constructor.prototype.token = hasToken;
    };
}
const student = new Student(101, "John Bender");
// console.log("Does the teacher have a token?", student['token']);
