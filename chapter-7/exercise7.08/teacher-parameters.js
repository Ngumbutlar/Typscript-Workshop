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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
class Teacher6 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getFullName(title, suffix) {
        return `${title} ${this.name} ${suffix}`;
    }
}
__decorate([
    Validate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Teacher6.prototype, "getFullName", null);
function Required(target, propertyKey, parameterIndex) {
    if (Required.hasMetadata("required", target, propertyKey)) {
        const existing = Reflect.getMetadata("required", target, propertyKey);
        Reflect.defineMetadata("required", existing.concat(parameterIndex), target, propertyKey);
    }
    else {
        Reflect.defineMetadata("required", [parameterIndex], target, propertyKey);
    }
}
function Validate(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        //validate parameters
        if (Reflect.hasMetadata("required", target, propertyKey)) {
            const requiredParams = Reflect.getMetadata("required", target, propertyKey);
            for (const required of requiredParams) {
                if (!args[required]) {
                    throw Error(`The parameter at position ${required} is required`);
                }
            }
        }
        return original.apply(this, args);
    };
}
const teacher6 = new Teacher6(2, " John Smith");
try {
    console.log(teacher6.getFullName("", "Esq"));
}
catch (e) {
    console.log(e.message);
}
