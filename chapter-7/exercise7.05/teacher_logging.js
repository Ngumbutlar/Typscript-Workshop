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
class Teacher4 {
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
    LogMethod("Title property"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Teacher4.prototype, "title", null);
__decorate([
    LogMethod("Teach method"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Teacher4.prototype, "teach", null);
const teacher4 = new Teacher4(" John Smith");
teacher4.teach();
teacher4.title = " Mr.";
console.log(`${teacher4.title} ${teacher4.name}`);
function LogMethod(message) {
    return function (target, propertyName, descriptor) {
        if (descriptor.value) {
            const original = descriptor.value;
            descriptor.value = function (...args) {
                logger.info(`${message}: Method ${propertyName} invoked`);
                //we're passing in the original arguments to the method
                return original.apply(this, args);
            };
        }
        if (descriptor.get) {
            const original = descriptor.get;
            descriptor.get = function () {
                logger.info(`${message}: Getter for ${propertyName} invoked`);
                //getter accessors do not take parameters
                return original.apply(this, []);
            };
        }
        if (descriptor.set) {
            const original = descriptor.set;
            descriptor.set = function (value) {
                logger.info(`${message}: Setter for ${propertyName} invoked`);
                //setter accessors take a single parameter, i.e the value to be set
                return original.apply(this, [value]);
            };
        }
    };
}
const logger2 = {
    info: (message) => {
        console.log(`[INFO]: ${message}`);
    },
};
