"use strict";
// primitive types
const products_list = [];
//add products to products array
function makeProducts(p) {
    products_list.push(p); //add products to the end of array
}
for (let index = 0; index < 5; index++) {
    let p = {
        name: "Product" + "_" + `${index}`,
        count: index,
        price: 100,
        amount: 15
    };
    makeProducts(p);
}
console.log(products_list);
