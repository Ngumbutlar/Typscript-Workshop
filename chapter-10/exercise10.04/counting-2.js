"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const numbers1 = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
var numbers1 = ["One", "Two", "Three", "Go", "d", "r", "m", "f", "s", "l", "t", "d'"];
var delay = function (ms) {
    var result = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
    return result;
};
// delay(1000)
// .then(() => console.log(numbers1[0]))
// .then(() => delay(1000))
// .then(() => console.log(numbers1[1]))
// .then(() => delay(1000))
// .then(() => console.log(numbers1[2]))
// .then(() => delay(1000))
// .then(() => console.log(numbers1[3]))
// .then(() => delay(1000))
// .then(() => console.log(numbers1[4]))
// .then(() => delay(1000))
// .then(() => console.log(numbers1[5]))
// .then(() => delay(1000))
// .then(() => console.log(numbers1[6]))
// .then(() => delay(1000))
// .then(() => console.log(numbers1[7]))
// .then(() => delay(100))
var promise = Promise.resolve();
var _loop_1 = function (number) {
    promise = promise
        .then(function () { return delay(1000); })
        .then(function () { return console.log(number); });
};
for (var _i = 0, numbers1_1 = numbers1; _i < numbers1_1.length; _i++) {
    var number = numbers1_1[_i];
    _loop_1(number);
}
;
