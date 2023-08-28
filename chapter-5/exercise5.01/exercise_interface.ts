// Implementing an interface on object, function and class.

interface ProductObjectTemplate {
    height: number;
    width: number;
    color: string
};

interface ProductfunctionTemplate {
    (product: ProductObjectTemplate): ProductObjectTemplate;
};

interface ProductClassTemplate{
    makeProduct: ProductfunctionTemplate[];
    allProducts(): ProductObjectTemplate;
};

// class Product implements ProductClassTemplate {
//     products: ProductObjectTemplate[];

//     constructor() {
//         this.products = [];
//     };
//     makeProduct: ProductfunctionTemplate = [];
//     makeProduct(product: ProductObjectTemplate): ProductObjectTemplate[]{
//         this.products.push(product);
//         return this.products;
//     };

//     allProducts(): ProductObjectTemplate[] {
//         return this.products;
//     };
// }

// const productInstance: ProductClassTemplate = new Product();
// productInstance.makeProduct({
//     color: "red",
//     height: 10,
//     width: 14
// })

// console.log(productInstance.allProducts());