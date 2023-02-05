// **
// ** while Loop
// **

// var roast = 0;

// while (roast < 8) {
//     console.log("roast given");
//     console.log(roast);
//     roast++
// }
// while (roast < 28) {
//     console.log("roast given");
//     console.log(roast);
//     roast = roast + 2;
// }

// **
// ** For Loop
// **

// for (var i = 0; i <= 10; i++) {
//     console.log("this Number is: " + i);
// }

// var items = ["Banana", "Potato", "chips", "Mango", "Guava"];

// while (i = 0; i < items.length; i++) {
//     var item = items[i];
//     console.log(item);
// }

// ***
// *** Break ***
// ***

// for (var i = 0; i < 20; i++) {
//   console.log(i);
//   if(i > 10) {
//     break;
//   }
// }

// var item = 0;
// while (item < 15) {

//     console.log("item");
//     item++
//     if(item > 5) {
//         break;
//     }
// }

// var randNumber = [2, 45, 223, 12, 43, 65, 423, 123, 56];

// for (var i = 0; i < randNumber.length; i++) {
//   item = randNumber[i];
//   if (item > 400) {
//     break;
//   }
//   console.log(item);

// }

// ***
// *** Continue ***
// ***

// var random = [2, 34, 54, 32, 123, 32, 132, 143, 12, 54,63]

// for (var r = 0; r < random.length; r++) {
//     var number = random[r];

//     if(number > 100) {
//         continue;
//     }

//     console.log(number);

// }

// ***
// *** Reverse ***
// ***

// for (var num = 10; num >= 1; num--) {
//     console.log(num);
// }




// *** Module 19 Problem 3 ***



function make_avg() {
    var array = [2, 3, 1, 5, 4];
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    const arrAvg = sum / array.length;
    console.log(arrAvg);
    
}

make_avg();





