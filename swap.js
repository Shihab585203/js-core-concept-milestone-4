let first = 10;
let second = 5;

console.log(first, second);

// swap || temp
// Approach: 1

// const temp = first;
// first = second;
// second = temp;

// console.log(first, second);
// Approach: 2 || Destructuring

[first, second] = [second, first]; 
console.log(first, second);