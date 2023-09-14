"use strict";
// creating a simple class and apply some metadata for describing its methods
class Calculator {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    add() {
        return this.first + this.second;
    }
    subtract() {
        return this.first - this.second;
    }
    multiply() {
        return this.first * this.second;
    }
    divide() {
        return this.first / this.second;
    }
}
Reflect.defineMetadata("description", "A class that offers common operations over two numbers", Calculator);
Reflect.defineMetadata("description", "Retruns the result of adding two numbers", Calculator, "add");
Reflect.defineMetadata("description", "Returns the result of subtracting two numbers", Calculator, "subtract");
Reflect.defineMetadata("description", "Retruns the result of dividing two numbers", Calculator, "divide");
function showDescription(target) {
    if (Reflect.hasMetadata("description", target)) {
        const classDescription = Reflect.getMetadata("description", target);
        console.log(`${target.name}: ${classDescription}`);
        const methodNames = Object.getOwnPropertyNames(target.prototype);
        for (const methodName of methodNames) {
            if (Reflect.hasMetadata("description", target, methodName)) {
                const description = Reflect.getMetadata("description", target, methodName);
                console.log(` ${methodName}: ${description}`);
            }
        }
    }
}
showDescription(Calculator);
