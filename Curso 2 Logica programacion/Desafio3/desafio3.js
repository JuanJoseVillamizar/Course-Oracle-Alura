// Exercise 1

function calculateBMI( weight,height ) {
    const bmi = weight / ( height * height );
    return bmi;
}
console.log(calculateBMI(70, 1.75)); 

//------------------------------------------------------------------------------------------------------------//-----

// Exercise 2
function factorialNumber(number) { 
    let accumulated = number;
    let n = 1;
    while (number > n ){
        let factorial = accumulated * (number - n);
        accumulated = factorial;
        n++;
        if (number === n){
            return accumulated;
        }
    }
}
const number = 7;
console.log(factorialNumber(number));

/* 
Simplified exercise

function factorialDecrement(number) {
    let result = number;
    for (let i = number - 1; i > 0; i--) {
        result *= i;
    }
    return result;
}
console.log(factorialDecrement(7));

*/


//------------------------------------------------------------------------------------------------------------//-----

// Exercise 3
const dollar = 1;
const peso = 4165;

function convertDollarToPeso(dollar) {
    return dollar * peso;
}

const dollars = 500
console.log(`$${dollars} dollars is equivalent to : ${convertDollarToPeso(dollars)} Colombian pesos`)
//------------------------------------------------------------------------------------------------------------//-----




// Exercise 4

function calculateRectangleArea(width, length) {
    return (width * length);
}

function calculateRectanglePerimeter(width, length) {
    return 2*(width + length)
}

function replaceValues (selector, text){
    const tittle = document.querySelector(selector);
    tittle.textContent = text;
    return ;
}
function calculateValues() {
    const length = parseInt(document.getElementById('length').value);
    const width = parseInt(document.getElementById('width').value);
    console.log(length,width);
    
    calculateRectanglePerimeter()
    replaceValues('h1', `The area of rectangle is ${calculateRectangleArea(length,width)}`)
    replaceValues('h2', `The perimeter of rectangle is ${calculateRectanglePerimeter(length,width)}`)
}

//------------------------------------------------------------------------------------------------------------//-----

// Exercise 5

function calculateCircleArea(r,Pi) {
    return Pi * (r*r)
}
function calculateCirclePerimeter(r,Pi) {
    return (2*Pi) * r
}

function calculateCircleValues() {
    let Pi= 3.14
    let r= 4
    console.log('The area of circle is: ' + calculateCirclePerimeter(r,Pi))
    console.log('The perimeter of circle is: ' +calculateCircleArea(r,Pi))
}
calculateCircleValues()


// Exercise 6

function printMultiplicationTable(num) {
        for(let i = 1; i <= 10; i++) {
            console.log(`${num} * ${i} = ${num * i}`);
        }
        console.log("--------------------");
}

printMultiplicationTable(6);

// Extra -- Function base^exponent 

function power (base,exponent){
    let result = 1;
    for(let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}    

console.log(power(4,4));