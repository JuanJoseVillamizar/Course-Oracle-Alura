// Ejercicio 1
function helloWorld() {
    console.log('Hello World');
}

helloWorld();

// Ejercicio 2
function greet(name) {
    console.log(`Hello ${name}`)
}
greet('Juan');


// Ejercicio 3
function double(num) {
    return num * 2
}

console.log(double(5));

// Ejercicio 4
function average(num1,num2,num3) {
    const sum = num1 + num2 + num3;
    return (sum / 3);
}
console.log(Number(average(5,20,15).toFixed(2)));

// Ejercicio 5
function findMax(num1,num2) {
    const max = (num1 > num2) ? num1 : num2;
    return `The largest number is ${max}`
}

console.log(findMax(5,20));

// Ejercicio 6
function multiplyByItself(num) {
    return num * num;
}

console.log(multiplyByItself(10));
