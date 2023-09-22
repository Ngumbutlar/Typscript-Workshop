"use strict";
function inner() {
    console.log("   Inside inner function");
}
function middle() {
    console.log("   Starting middle function");
    inner();
    console.log("   Finishing Middle function");
}
function outer() {
    console.log("Starting outer function");
    middle();
    console.log("Finishing outer function");
}
outer();
