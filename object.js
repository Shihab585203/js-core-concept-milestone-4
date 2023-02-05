// var smartPhone = {
//     Brand: "samsung",
//     Storage: "128gb",
//     Ram: "8gb",
//     color: "Black",
// }


// var hpLaptop = {
//     processor: "core i7",
//     Ram: "8gb",
//     Hdd: "1TB"
// }

// console.log(hpLaptop.Hdd);



// ***
// *** multiple ways to get and set object property
// ***


var shoppingCart = {
    books : 3,
    sunglass : 4,
    pen : 20,
    pencil : 30,
}


// When you know the Property Name, use dot notation to get the propery value
// var penCount = shoppingCart.pen;

//  var propertyName = "books";

//  var propertyValue = shoppingCart[propertyName]; //value

//  console.log(propertyName, propertyValue);

// alternative system
// When you know the Property Name, use dot notation to get the propery value

// var pencilCount = shoppingCart["pencil"]

// var cart = Object.keys(shoppingCart);
// var cartV = Object.values(shoppingCart);

// console.log(cartV);


//set properties value

// shoppingCart.sunglass = 60;
// console.log(shoppingCart);

// shoppingCart[propertyName] = 110;
// console.log(shoppingCart);






// ***
// *** Looping through an object
// ***

let keys = Object.keys(shoppingCart);
console.log(keys);


let values = Object.values(shoppingCart)
console.log(keys, values);


for(var i = 0; i < keys.length; i++) {
    // var propertyName = keys[i];
    // var propertyValue = values[i];
    // console.log(propertyName, propertyValue);
}

// for in loop

for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}