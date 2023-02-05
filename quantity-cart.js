const shoppingCart = [
    { name: "shoe", price: 2200, quantity: 4 },
    { name: "Shirt", price: 2600, quantity: 6 },
    { name: "pant", price: 1900, quantity: 4 },
    { name: "belt", price: 800, quantity: 8 },
];


function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        sum += product.price * product.quantity;
    }
    return sum;
}



const result = totalCost(shoppingCart);
console.log("Total Price is: " , result);