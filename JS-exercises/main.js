let str= "Starting Javascript...";
console.log(str);

// let myname="Emma";
// console.log(myname);

// let myage= 33;
// console.log(myage)

// let juliaage= 32;
// console.log(juliaage);

// let agediff= (myage)-(juliaage);
// console.log(agediff);



// function checkage (myage) {
// return myage > 21 ?   result="You are older than 21" :  result="You are younger than 21";
//     // let result;
//     // if (myage > 21) {
//     //     result="You are older than 21"; 
//     // } 
//     // else {
//     //     result="You are younger than 21";
//     // }
//     // return result;

// }

// Use the first version as a more efficient way of comparing (if / else - The ? sets it up as a conditional operator and the : separates the two elements that are being compared)

// console.log (checkage(myage));


// function compareage (myage,juliaage) {

//     let result;
//     if (myage>juliaage) {
//         result= "You are older than Julia";
//     }
//     else if (myage == juliaage) {
//         result= "You are the same age as Julia";
//     }
//     else if (myage < juliaage) {
//         result= "You are younger than Julia"
//     }
//     return result;

// }

// console.log (compareage(myage,juliaage));

// // const - to declare a variuable that is fixed (ie. constant). Honeybadgers is the array.

// const array = ["Josh", "Sam", "Moni", "Hassan", "Emma", "Heron"];
// document.getElementById("teamnames").outerHTML = array;

// array.sort();
// document.getElementById("sortedteamnames").outerHTML = array;

// console.log(array);

// // Below is to print certain elements within the array object.

// for (let i=0;i<array.length;i++)
// {
// console.log(array[0]);
// }
// {
// console.log(array[5]);
// }
// for (let i=0;i<array.length;i++)
// {
// console.log(array[i]);
// }


//Exercise 7

let ages = [28,30,31,33,32,35];
console.log(ages);

let i = 0

// While i less than the length of ages, console log i and then increment by one (++)
function whileIterator(ages)  {
    while (i < ages.length ) {
        console.log(ages[i]);
        i++;
        
    };
}

whileIterator(ages);


// While i divided by 2 = 0, print only even numbers

//NEED HELP - WHY NOT PRINTING



// function evenages() {
//     let even = [];
//     let i = 0;
    
//     while (i < ages.length) {
//         if (ages[i] % 2 == 0) {
//             even.push(ages[i]);
//         }
//         i++;
//     }
//         console.log(evenages);
// }




   


// //EXERCISE 8

const ex8= [5, 3, 9, 16, 21];
console.log(ex8);

// // to loop through the array

for (let i=0; i < ex8.length; i++){
    console.log(ex8[i]);
}

// // // Writing the function. ( ) is parameters. Math.min is the function, calling the array.

console.log(Math.min(...ex8));

// EXERCISE 9

console.log(Math.max(...ex8));

// EXERCISE 10

const ex10= [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
console.log (ex10);

// Loop

for (let i=0; i<ex10.length; i++){
    console.log(ex10[i]);
}

// Print value of element at given position

console.log (ex10[2]);

// EXERCISE 11

// To remove from array but not print in new array

let ex11 = [1, 2, 1, 3, 4, 3, 5];

function removeDuplicates (ex11) {
    return ex11.filter ((item, index) =>ex11.indexOf(item)===index);
}

console.log(removeDuplicates(ex11));

// To print dupes in array

let dupes = ex11.filter((item, index) => {
    return ex11.indexOf(item) !== index;
    });

console.log(dupes);
