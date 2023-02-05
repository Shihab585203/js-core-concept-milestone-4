

function removeDuplicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++) {
        const singleName = names[i];
        if(unique.includes(singleName) === false){
            unique.push(singleName);
        }
    }
    return unique;
}


const dupNames = ["Rayhan", "Mustafa", "Alam", "Ruman", "Mustafa", "Siddique", "Alam", "Rayhan"];

const uniqueNames = removeDuplicate(dupNames);

console.log(uniqueNames);
