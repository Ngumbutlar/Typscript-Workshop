"use strict";
// let variable: number;
// if (Math.random()>0.5){
//     variable = 3;
// } else {
//     variable ="String";
// }
// console.log(variable);
// function add(x: number, y: number): number{
//     return x+y;
// }
// const result = add(10, 2);
//Arrays
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[3]);
// for(let index = 0; index < numbers.length; index += 1){
//     const element = numbers[index];
//     console.log(`The element at index ${index} has a value of ${element}`);
// }
// let sum = 0;
// for ( const element of numbers){
//     sum += element;
//     console.log(sum)
// }
//Tuples
// const person = ["Ada", "Lovelace", 36];
// console.log(`First Name is: ${person[0]}`);
// console.log(`Last Name is: ${person[1]}`);
// console.log(`Age is: ${person[2]}`);
// Any and Unknown
// let variable: any =3;
// if (Math.random()>0.5){
//     variable = "not-a-number"
// }
//Making your own types
// type Person = {
//     firstName: string;
//     secondName: string;
//     age?:number;
// }
// type FilterFunction = (person: Person) => boolean
// const person = new Person("Ada", "LOvelace")
// console.log(person.getFullName());
