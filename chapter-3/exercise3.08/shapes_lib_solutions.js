"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArea = void 0;
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
exports.getArea = getArea;
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
