"use strict";
// Creating a memoize function that uses generics (takes in a function and returns a function of the same type)
function memoize(fn, keyGetter) {
    const cache = {};
    return (...args) => {
        const key = (keyGetter || JSON.stringify)(args);
        if (!(key in cache)) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}
function expensiveCalculation(a, b) {
    const timeout = 10000;
    const start = Date.now();
    while (Date.now() <= start + timeout)
        ;
    return a + b;
}
const memoizeExpensiveCalculation = memoize(expensiveCalculation);
memoizeExpensiveCalculation("not-a-number", 1);
