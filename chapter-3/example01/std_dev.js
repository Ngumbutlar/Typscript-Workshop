"use strict";
// program to calculate standard deviation
// const value: Array<number> = [8, 42, 99, 161];
// let total: number = 0;
// for(let i = 0; i < value.length; i++){
//     total += value[i];
// }
// const average2: number = total/ value.length;
// const squareDiff: Array<number> = [];
// for(let i=0; i< value.length; i++){
//     const diff = value[i] - average2;
//     squareDiff.push(diff * diff)
// }
// total = 0;
// for(let i=0; i< squareDiff.length; i++){
//     total += squareDiff[i];
// }
// const standardDeviation: number = Math.sqrt(total/squareDiff.length);
// console.log( standardDeviation);
//let's try with a function
const calcAverage2 = (value) => (value.reduce((prev, curr) => prev + curr, 0) / value.length);
const calcStandardDeviation = (value) => {
    const average2 = calcAverage2(value);
    const squareDiffs = value.map((value) => {
        const diff = value - average2;
        return diff * diff;
    });
    return Math.sqrt(calcAverage2(squareDiffs));
};
const value = [8, 42, 99, 161];
console.log(calcStandardDeviation(value));
