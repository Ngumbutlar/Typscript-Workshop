"use strict";
//Refactoring Javascript code(program that pronts area of various shape) to Typescript code
Object.defineProperty(exports, "__esModule", { value: true });
// const PI: number = 3.14;
// interface Shape{
//     area?: number;
//     type: 'circle' | 'rectangle' | 'rightTriangle' | 'square';
// }
// interface Circle extends Shape{
//     radius: number;
//     type: 'circle';
// }
// interface Rectangle extends Shape {
//     length: number;
//     type: 'rectangle';
//     width: number;
// }
// interface RightTriangle extends Shape{
//     heigth: number;
//     type: 'rightTriangle';
//     base: number;
// }
// interface Square extends Shape{
//     width: number;
//     type: 'square';
// }
// const getArea = (shape: Shape) => {
//     switch (shape.type){
//         case 'circle':
//             return getCircleArea(shape as Circle);
//         case 'rectangle':
//             return getRectangleArea(shape as Rectangle);
//         case 'rightTriangle':
//             return getRightTriangleArea(shape as RightTriangle);
//         case 'square':
//             return getSquareArea(shape as Square);
//     }
// };
// const getCircleArea = (circle: Circle): number => {
//     const {radius} = circle;
//     return radius * radius * PI;
// }
// const getRectangleArea = (rectangle: Rectangle): number =>{
//     const{length, width} = rectangle;
//     return length * width;
// }
// const getRightTriangleArea = (rightTriangle: RightTriangle): number =>{
//     const{heigth, base} = rightTriangle;
//     return 0.5*(base*heigth);
// }
// const getSquareArea = (square: Square): number =>{
//     const{width} = square;
//     return (width * width);
// }
const shapes_lib_solutions_1 = require("../exercise3.08/shapes_lib_solutions");
const circle = { radius: 4, type: 'circle' };
console.log(Object.assign(Object.assign({}, circle), { area: (0, shapes_lib_solutions_1.getArea)(circle) }));
const rectangle = { type: 'rectangle', length: 7, width: 4 };
console.log(Object.assign(Object.assign({}, rectangle), { area: (0, shapes_lib_solutions_1.getArea)(rectangle) }));
const rightTriangle = { type: 'rightTriangle', base: 9, heigth: 4 };
console.log(Object.assign(Object.assign({}, rightTriangle), { area: (0, shapes_lib_solutions_1.getArea)(rightTriangle) }));
const square = { type: 'square', width: 6 };
console.log(Object.assign(Object.assign({}, square), { area: (0, shapes_lib_solutions_1.getArea)(square) }));
