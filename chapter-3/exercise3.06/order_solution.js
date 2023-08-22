"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFactory = void 0;
const orderFactory = () => {
    let id = 0;
    return (color) => (size) => (qty) => {
        const orders = [];
        for (let i = 0; i < qty; i++) {
            orders.push({ id: id++, color, size });
        }
        return orders;
    };
};
exports.orderFactory = orderFactory;
const createOrder = (0, exports.orderFactory)();
const redSmall = createOrder('red')('S');
const redMedium = createOrder('red')('M');
const blueSmall = createOrder('blue')('S');
const oderOne = redMedium(4);
console.log(oderOne);
const orderTwo = blueSmall(7);
console.log(orderTwo);
const orderThree = redSmall(11);
console.log(orderThree);
