


// function getOddNumbers(numbers) {
//     const oddNumArray = [];
//     // var sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       const index = i;
//       const element = numbers[index];
//       if (element % 2 != 0) {
//         console.log("Odd Number is: " + element);
//         // sum = sum + element;
//         oddNumArray.push(element);
//       }
//     }
//     return oddNumArray;
//   }
  
  
//   const anArray = [5, 7, 8, 10, 45, 30];
//   const oddNumber = getOddNumbers(anArray);
//   console.log(oddNumber);



function arrayfunc(numbers2) {
  const oddNumb = [];
  for(var i = 0; i < numbers2.length; i++) {
    let index = i;
    let element = numbers2[i];
    if(element % 2 !== 0) {
      console.log("The odd number is: " , element);
      oddNumb.push(element);
    }
  }
  return oddNumb;
}

const anArray = [5, 7, 8, 10, 45, 30];
 result = arrayfunc(anArray);
console.log(result);
