// function reverseArray(text){
//     let reversed = " ";
//     for(let i = text.length - 1; i > 0; i--) {
//         let reverseText = text[i];
//         reversed += reverseText
//         console.log(reverseText, reversed);
//     }
//     return reversed;
// }



// let content = " My name is Shihab and i read in college";
// const output = reverseArray(content);
// console.log(output);



// *** Word Reverse ***


function reverseWord(text) {
    const reversed = text.split(" ");
    const result = [];
    for(let i = reversed.length -1; i >= 0; i--) {
        const element = reversed[i];
        result.push(element);
        
    }
    const resultJoin = result.join(" ");
    return resultJoin;
    
}


const wordElement = "Myself Shihab Ahmed";
output = reverseWord(wordElement);
console.log(output);