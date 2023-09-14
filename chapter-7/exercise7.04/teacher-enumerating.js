"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Teacher3 {
    constructor(name) {
        this.name = name;
        this._title = "";
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    teach() {
        console.log(`${this.name} is teaching`);
    }
}
__decorate([
    Enumerable(true),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Teacher3.prototype, "title", null);
__decorate([
    Enumerable(true),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Teacher3.prototype, "teach", null);
const teacher3 = new Teacher3("John");
for (const key in teacher3) {
    console.log(key);
}
function Enumerable(value) {
    return function (target, propertyName, descriptor) {
        descriptor.enumerable = value;
    };
}
;
