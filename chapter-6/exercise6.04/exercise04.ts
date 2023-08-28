type Product1 = {
    name: string,
    price: number,
    amount: number
}

type Post = {
    header: string,
    method: string,
    product: Product1
}

type Put = {
    header: string,
    method: string,
    product: Product1,
    productID: number
}

type SomeRequest = Post | Put;

const products: Product1[] = [];

function ProcessRequest(request: SomeRequest) {
    if ("productID" in request) {
        products.forEach(
            (p: Product1, i: number) => {
                products[request.productID] = {
                    ...request.product
                };
            }
        );
    } else {
        products.push(request.product);
    }
}

const apple: Product1 = {
    name: "apple",
    price: 12345,
    amount: 10
};
const mango: Product1 = {
    name: "mango",
    price: 666666,
    amount: 15
};

//define put and post objects
const postAppleRequest : Post = {
    header: "zzzzzz",
    method: 'new',
    product: apple
};

const putMangoRequest: Put = {
    header: "gggggg",
    method: 'update',
    product: mango,
    productID: 2
};

ProcessRequest(postAppleRequest);
ProcessRequest(putMangoRequest);
console.log(products);


