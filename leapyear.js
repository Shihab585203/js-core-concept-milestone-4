// function leap(year) {
//     const reminder = year % 4;
//     if (reminder === 0) {
//         return true;
//     } else {
//         return false
//     }
// }


// var inputYear = leap(2100);
// console.log(inputYear);

// *** another system ***


// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + " is a Leap Year");
//     } 
    
//     else {
//         console.log(year + " is not a Leap Year");
//     }
// }

// checkLeapYear(2100);



function findLeapYear(year){
    //  var inputYear = [];
    for (var i = 0; i < year.length; i++) {
        const reminder = i;
        const element = year[reminder];
        if((0 === element % 4) && (0 !== element % 100) || (0 === 400)) {
            console.log(element, " is a Leap Year");
            //  inputYear.push(element);
        } else {
            console.log(element, " isn't a Leap Year");
            //  inputYear.push(element);
        }
    }
    //  return inputYear;

}

var arr = [2023, 2024, 2025, 2028, 2030, 2080]
findLeapYear(arr);

// console.log(x);
