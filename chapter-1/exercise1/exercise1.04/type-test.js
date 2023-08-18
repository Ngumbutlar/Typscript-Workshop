"use strict";
const daysInWeek = 7;
const names = "Ada Lovelace";
const isRaining = false;
const today = new Date();
const months = ["January", "February", "March"];
const notDefined = undefined;
const nothing = null;
// const add = (x:number, y:number) => x + y;
// const calculator ={
//     add
// }; 
const everything = [daysInWeek, name, isRaining, today, months, notDefined, nothing, add, calculator];
for (const something of everything) {
    const type = typeof something;
    console.log(something, type);
}
