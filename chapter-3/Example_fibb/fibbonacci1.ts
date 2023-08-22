
// Procedure to get fibbonacci sequence of the first 10 numbers

// let next: number = 0;
// let inc: number = 1;
// let current: number = 0;

// for(let i: number = 0; i < 10; i++){
//     [current, next, inc] = [next, inc, next + inc];
//     console.log(current);
// }


// Now we'll use a function


// let next: number = 0;
// let inc: number = 1;
// let current: number = 0;

// const getNext = (): number => {
//     [current, next, inc] = [next, inc, next + inc];
//     return current;
// };

// for(let i: number = 0; i < 10; i++){
//     console.log(getNext());
// }


// If the function were exported and called by another part of the program


const fibbonacci = () => {
    let next: number = 0;
    let inc: number = 1;
    let current: number = 0;
    return () => {
        [current, next, inc] = [next, inc, next + inc];
        return current;
    };
};

const getNext = fibbonacci();
for (let i = 0; i < 10; i++){
    console.log(getNext());
}