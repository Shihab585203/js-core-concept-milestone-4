function getSumOfAnArray(numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum += element;
    console.log(sum);
  }
  console.log(sum);
}

function getOddNumbers(numbers) {
  const oddNumArray = [];
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 != 0) {
      console.log("Odd Number is: " + element);
      sum = sum + element;
      oddNumArray.push(element);
    }
  }
  return {
    arr: oddNumArray,
    total: sum
  }
}


const anArray = [5, 7, 8, 10, 45, 30];
const oddNumber = getOddNumbers(anArray);
console.log(oddNumber);

