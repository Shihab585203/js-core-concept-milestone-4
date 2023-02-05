// function multiNumber (factorial) {
//     let result = 1;
//     for(var i = 1; i <= factorial; i++) {
//         result *= i;
//     }
//     return result;
// }

// const countNumb = multiNumber(7);
// console.log(countNumb);


// while loop
function factorial(number) {
    var i = number;
    let result = 1;
    while(i >= 1) {
        result *= i;
        i--;
    }
    return result;
}

let inputNumb = factorial(5);
console.log(inputNumb);