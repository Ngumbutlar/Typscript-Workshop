// Order system for some sort of garment

interface Order {
    id: number;
    color: string;
    size: string;
}

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

export const orderFactory = (): ((
    color: string,
    size: string,
    qty: number
) => Order[]) => {
    let id = 0;
    return (color: string, size: string, qty: number): Order[]=>{
    const orders = [];
    for(let i = 0; i < qty; i++){
        orders.push({id: id++, color, size});
    }
    return orders;
 };
};

const createOrder = orderFactory();
const orderOne = createOrder('red', 'M', 4);
console.log(orderOne);
const orderTwo = createOrder('blue', 'S', 7);
console.log(orderTwo);