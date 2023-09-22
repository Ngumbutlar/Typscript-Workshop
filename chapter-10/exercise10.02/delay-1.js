"use strict";
console.log("Printed immediately");
setTimeout(function () {
    console.log("Printed after one second");
}, 2000);
setTimeout(function () {
    console.log("Printed after two second");
}, 1000);
console.log("Printed immediately");
