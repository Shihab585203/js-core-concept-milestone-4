// max min

// let abir = 20;
// let bulbul = 60;
// let sweety = 50;

// console.log(Math.min(abir, bulbul, sweety));

// if (abir > bulbul && abir > sweety) {
//   console.log("abir will eat the cake");
// } else if (bulbul > abir && bulbul > sweety) {
//   console.log("bulbul will eat the cake");
// } else {
//   console.log("sweety will eat the cake");
// }

// function maximumNumb(a, b, c) {
//     var number = Math.min(a, b, c);
//     return number;
// }
// const result2 = maximumNumb(abir, bulbul, sweety);
// console.log(result2);

function maxInarray(numbers) {
  let largest = height[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element < largest) {
      largest = element;
    }
  }
  return largest;
}

const height = [178, 167, 190, 192, 185, 175];
const result = maxInarray(height);
console.log("largest Person is: ", result);
