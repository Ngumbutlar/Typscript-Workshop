"use strict";
//Take a string and a number and return that string repeated that number of times
//Array constructor 
function Repeat(str, count) {
    var result = "";
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}
console.log(Repeat("War", 3));
console.log(Repeat("rye", 6));
console.log(Repeat("bell", 3));
