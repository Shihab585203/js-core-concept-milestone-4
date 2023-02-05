let content = "Myself Shihab ahmed. I am belongings to cuMillA polyTechnic Institute at civil Department" ;

// let change = content.toUpperCase();
// let doesExist = content.includes("Myself");
const singleWord = "aHMed";
const contentLowerCase = content.toLowerCase();
const doesExist = contentLowerCase.includes(singleWord);

const singleExist = content.toLowerCase().includes(singleWord.toLowerCase());


console.log(content.indexOf("Shhab"));

if(content.toLowerCase().indexOf("cumilla") !== -1 ) {
    console.log("exist inside the string");
}
else {
    console.log("doesn't exist inside the string");
}

