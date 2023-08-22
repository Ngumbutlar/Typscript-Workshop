import { size } from "lodash";

interface Order {
    id: number;
    color: string;
    size: string;
}

export const orderFactory = () => {
    let id = 0;
    return (color: string) => (size: string) => (qty: number) => {
        const orders = [];
        for (let i = 0; i < qty; i++){
        orders.push({id: id++, color, size});
        }
        return orders
    }
}
const createOrder = orderFactory();

const redSmall = createOrder('red')('S');
const redMedium = createOrder('red')('M');
const blueSmall = createOrder('blue')('S');

const oderOne = redMedium(4);
console.log(oderOne);

const orderTwo = blueSmall(7);
console.log(orderTwo);

const orderThree = redSmall(11);
console.log(orderThree);