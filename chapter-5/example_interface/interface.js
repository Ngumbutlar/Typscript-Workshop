"use strict";
// Working with typescript Interfaces
// Make product function
const productMaker = (product) => {
    return product;
};
const myProduct = {
    height: 10,
    width: 12,
    color: 'red',
};
console.log(productMaker(myProduct));
//class that implements product interface
class ProductClass {
    constructor(product) {
        this.product = product;
    }
    makeProduct() {
        return this.product;
    }
}
//nwe product object
const product = { height: 100, width: 200, color: 'pink' };
// Instatiate product class with new product object
const newProduct = new ProductClass(product);
console.log(newProduct.product);
