import { reject } from "lodash";

// const numbers1 = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
const numbers1 = ["One", "Two", "Three", "Go", "d", "r", "m", "f", "s", "l", "t", "d'"];

const delay = (ms: number) => {
    const result = new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });

    return result;
}

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



let promise = Promise.resolve();
for (const number of numbers1) {
    promise = promise
        .then(() => delay(1000))
        .then(() => console.log(number))
};
