"use strict";
// Order system for some sort of garment
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFactory = void 0;
// export const createOrder = (
//     color: string,
//     size: string,
//     quantity: number
// ): Order[] => {
//     let id = 0;
//     const orders = [];
//     for(let i = 0; i < quantity; i++){
//         orders.push({id: id++, color, size});
//     }
//     return orders;
// };
const orderFactory = () => {
    let id = 0;
    return (color, size, qty) => {
        const orders = [];
        for (let i = 0; i < qty; i++) {
            orders.push({ id: id++, color, size });
        }
        return orders;
    };
};
exports.orderFactory = orderFactory;
const createOrder = (0, exports.orderFactory)();
const orderOne = createOrder('red', 'M', 4);
console.log(orderOne);
const orderTwo = createOrder('blue', 'S', 7);
console.log(orderTwo);
