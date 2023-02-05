function recursion(i) {
    if(i == 1){
        return 1;
    }
    return i + recursion(i - 1);
}


const inputNumber = recursion(5);
console.log(inputNumber);