// Exercise 1
const genericList = [];

// Exercise 2
const programmingLanguages = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

// Exercise 3
programmingLanguages.push('Java','Ruby','GoLang');

// Exercise 4
function showArrayElements(array) {
    console.log(array);
}

showArrayElements(programmingLanguages);

// Exercise 5
function showArrayElementsInReverse(array) {
    console.log(array.reverse());
}
showArrayElementsInReverse(programmingLanguages);

// Exercise 6

const numbersList = [];
let sum = 0 ;
let averageList = 0;
function addNumbers(array, ...numbers) {
    array.push(...numbers);
}
function average(array) {
    array.forEach((element)=>{sum += element})
    return console.log(averageList = sum / array.length);
}

addNumbers(numbersList, 20, 10);
average(numbersList);


/*
Improved Version 
const numbersList = [];
function addNumbers(array, ...numbers) {
    array.push(...numbers);
}
function calculateAverage (array){
    const sum = array.reduce((total, num ) => total + num, 0) ;
    return sum/array.length;
    addNumbers(numbersList, 20, 10);
calculateAverage(numbersList);
}

*/
// Exercise 7
const numbers = [10, 2, 3, 48, 55, 60, 7, 8, 9, 19];
function findMaxAndMin(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return console.log(`The maximum number is ${max} and the minimum number is ${min}`);
}
findMaxAndMin(numbers)


// Exercise 8
let sumElements = 0;
const elementsList = [];
addNumbers(elementsList, 30,40,15,7,9)

function sumElementsInArray(array) {
    array.forEach((element)=>{sumElements += element})
    return console.log(sumElements);
}

sumElementsInArray(elementsList);

/*
Improved Version

function sumElementsInArray (array) {
return array.reduce((total, element)=>total + element, 0);
}

const elementsList = [];
addNumbers(elementsList, 30,40,15,7,9)
console.log(sumElementsInArray(elementsList));


*/



// Exercise 9
function findIndex(array,numberUser) {
    const index = array.findIndex((num) => num === numberUser);
    if (index){
        return console.log(`The index of ${numberUser} is [${index}]`);
    }else {
        return -1
    }
}

/*
Improved version 
The findIndex function returns -1 if it does not find the number
function findIndex(array, element){
    return array.findIndex((num)=> num === element)
}
console.log(findIndex(elementsList, 15)); 

*/ 
findIndex(elementsList, 15)

// Exercise 10
const array1 = [5,6,7,8]
const array2= [1,2,3,4]
function sumArrays(array1, array2) {
    if (array1.length !== array2.length) {
        console.log("The arrays must have the same length");
    }
    const suma = array1.map((num1, index) => num1 + array2[index]);
    return console.log(suma);
}
sumArrays(array1,array2)


/*   
Improved version

const array1 = [5,6,7,8]
const array2= [1,2,3,4]

function sumArrays(array1, array2) {
    if (array1.length !== array2.length) {
        console.log("The arrays must have the same length");
    }
    return array1.map((num1, index)=> num1 + array2[index])
}

console.log(sumArrays(array1, array2));
*/

// Exercise 11
const listNumbersBase = [2,3,4,5,1,10];
function squares(array) {
    const squaresList = array.map((num1,) => num1 * num1);
    return squaresList;
}

console.log(squares(listNumbersBase))