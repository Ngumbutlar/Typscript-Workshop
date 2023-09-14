"use strict";
// simple decorator factory that wil provide each property with a description
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Teacher5 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
__decorate([
    Description("This is the id of the teacher"),
    __metadata("design:type", Number)
], Teacher5.prototype, "id", void 0);
__decorate([
    Description("Thsi is the name of the teacher"),
    __metadata("design:type", String)
], Teacher5.prototype, "name", void 0);
//decorator factory
function Description(message) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("description", message, target, propertyKey);
    };
}
function showDescriptions(target) {
    for (const key in target) {
        if (Reflect.hasMetadata("description", target, key)) {
            const description = Reflect.getMetadata("desription", target, key);
            console.log(` ${key}: ${description}`);
        }
    }
}
const teacher5 = new Teacher5(1, "John Smith");
showDescriptions(teacher5);
