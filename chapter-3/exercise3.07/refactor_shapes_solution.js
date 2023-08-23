"use strict";
//Refactoring Javascript code(program that pronts area of various shape) to Typescript code
const PI = 3.14;
const getArea = (shape) => {
    switch (shape.type) {
        case 'circle':
            return getCircleArea(shape);
        case 'rectangle':
            return getRectangleArea(shape);
        case 'rightTriangle':
            return getRightTriangleArea(shape);
        case 'square':
            return getSquareArea(shape);
    }
};
const getCircleArea = (circle) => {
    const { radius } = circle;
    return radius * radius * PI;
};
const getRectangleArea = (rectangle) => {
    const { length, width } = rectangle;
    return length * width;
};
const getRightTriangleArea = (rightTriangle) => {
    const { heigth, base } = rightTriangle;
    return 0.5 * (base * heigth);
};
const getSquareArea = (square) => {
    const { width } = square;
    return (width * width);
};
const circle = { radius: 4, type: 'circle' };
console.log(Object.assign(Object.assign({}, circle), { area: getArea(circle) }));
const rectangle = { type: 'rectangle', length: 7, width: 4 };
console.log(Object.assign(Object.assign({}, rectangle), { area: getArea(rectangle) }));
const rightTriangle = { type: 'rightTriangle', base: 9, heigth: 4 };
console.log(Object.assign(Object.assign({}, rightTriangle), { area: getArea(rightTriangle) }));
const square = { type: 'square', width: 6 };
console.log(Object.assign(Object.assign({}, square), { area: getArea(square) }));
