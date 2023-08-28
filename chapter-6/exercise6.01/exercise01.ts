// primitive types

type Count = number;

// object type
type Product = {
    name: string,
    count: Count,
    price: number,
    amount: number

}

const products_list: Product[] = [];

//add products to products array
function makeProducts(p: Product){
    products_list.push(p) //add products to the end of array
}
for(let index = 0; index < 5; index++){
    let p: Product = {
        name: "Product"+ "_" + `${index}`,
        count: index,
        price: 100,
        amount: 15
    }
    makeProducts(p);
    
}
console.log(products_list);