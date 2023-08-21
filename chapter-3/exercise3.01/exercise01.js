"use strict";
//program which calculates the average of numbers
// const values:Array<number> = [8, 42, 99, 161];
// let total:number = 0;
// for(let i:number = 0; i < values.length; i++){
//     total += values[i];
// }
// const average: number = total/values.length;
// console.log(average)
//code that makes use of functions
const calcAverage = (values) => (values.reduce((prev, curr) => prev + curr, 0) / values.length);
const values = [8, 42, 99, 161];
const average = calcAverage(values);
console.log(average);
