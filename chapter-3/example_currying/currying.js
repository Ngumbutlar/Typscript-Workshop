"use strict";
// const addTwoNumbers = (a: number, b: number): number => a + b;
// console.log(addTwoNumbers(3, 4));
const addTwoNumbers = (a) => {
    return (b) => {
        return a + b;
    };
};
const addFunction = addTwoNumbers(3);
console.log(addFunction(4));
