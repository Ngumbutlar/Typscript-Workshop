// Working with typescript Interfaces


interface ProductTemplate {
    height: number;
    width: number;
    color: string
}

//function Interface

interface productInterfaceFunction {
    (product: ProductTemplate): ProductTemplate
}

// Make product function
const productMaker: productInterfaceFunction = (product: ProductTemplate) => {
    return product;
}

const myProduct: ProductTemplate = {
    height: 10,
    width: 12,
    color: 'red',
}
console.log(productMaker(myProduct));


// Now let's refactor the code
/// we'll define a class that will encapsulate the product properties and methods.

interface ProductClassInterface {
    product: ProductTemplate
    makeProduct(product: ProductTemplate): ProductTemplate
}

//class that implements product interface

class ProductClass implements ProductClassInterface {
    product: ProductTemplate
    constructor(product: ProductTemplate) {
        this.product = product;
    }

    makeProduct(): ProductTemplate {
        return this.product;
    }
}

//nwe product object
const product: ProductTemplate = { height: 100, width: 200, color: 'pink' };

// Instatiate product class with new product object
const newProduct = new ProductClass(product);
console.log(newProduct.product);