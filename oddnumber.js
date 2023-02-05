/* ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 
*/

// function positiveNumber(number) {
//     positiveResult = [];
//     for(let i = 0; i < number.length; i++) {
//         const element = number[i];
//         if(element < 0) {
//             break
//         } else {
//             positiveResult.push(element);
//         }
//     }
//     return positiveResult;
// }


// const arr = [2, 56, 78, 98, 52, -22, -21, 25, -66];
// const input = positiveNumber(arr);
// console.log(input);





// write an array with some friends. get an output your best friend which name are maxium word of the name.

function bestFreiend(name){
    let nameStr = name[0].length;
    let mainName = name[0];
    for(let i = 1; i < name.length; i++) {
        const maxi = name[i].length;
        if(maxi > nameStr){
            mainName = name[i];
            nameStr = maxi;
        }
    }
    return mainName;
}


const friendsName = ["alauddin", "rafik", "shafique", "kuddus", "mustafa alam"];
const output2 = bestFreiend(friendsName);
console.log(output2);


