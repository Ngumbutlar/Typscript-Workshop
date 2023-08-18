"use strict";
function isBlank(str) {
    if (str.match(/^\s*$/)) {
        return true;
    }
    else
        return false;
}
// function isBlank(str:string): boolean{
//     if (str.trim().length==0){
//         return true;
//     }
//     else return false;
// }
console.log(isBlank("War and Peace"));
console.log(isBlank("       "));
console.log(isBlank(""));
