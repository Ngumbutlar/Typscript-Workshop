"use strict";
const products = [];
function ProcessRequest(request) {
    if ("productID" in request) {
        products.forEach((p, i) => {
            products[request.productID] = Object.assign({}, request.product);
        });
    }
    else {
        products.push(request.product);
    }
}
const apple = {
    name: "apple",
    price: 12345,
    amount: 10
};
const mango = {
    name: "mango",
    price: 666666,
    amount: 15
};
//define put and post objects
const postAppleRequest = {
    header: "zzzzzz",
    method: 'new',
    product: apple
};
const putMangoRequest = {
    header: "gggggg",
    method: 'update',
    product: mango,
    productID: 2
};
ProcessRequest(postAppleRequest);
ProcessRequest(putMangoRequest);
console.log(products);
