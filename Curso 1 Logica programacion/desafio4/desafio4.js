// Ejercicio 1
console.log('Bienvenido a la consola ')

//Ejercicio 2
const nombre = 'Juan José'
console.log(`Bienvenido a la consola ${nombre}` )

//Ejercicio 3
const nameUsu = prompt('Escribe tu nombre')
alert(`Hola ${nameUsu} bienvenido`)

//Ejercicio 4
const lenguajeFavorito = prompt(`${nameUsu} escribe tu lenguaje favorito`)
console.log(`${nameUsu} que bueno que te guste ${lenguajeFavorito} este es un lenguaje muy practico`)

//Ejercicio 5
const valor1 = 5
const valor2 = 10
const resultado = valor1 + valor2
console.log(`La suma de ${valor1} + ${valor2} es igual a ${resultado}`)

//Ejercicio 6
const valor3 = 20
const valor4 = 21
const resta = valor4-valor3
console.log(`La diferencia entre ${valor4} y ${valor3} es igual a ${resta}.`)

//Ejercicio 7
const edad = parseInt(prompt(`${nameUsu} que edad tienes`))

if (edad >= 18){
    console.log(`${nameUsu} Eres mayor de edad ya puedes obtener tu identificación como tal`)
}
else {
    console.log(`${nameUsu} Eres menor de edad no puedes obtener tu identificación como tal`)
}

//Ejercicio 8
const numero = parseInt(prompt(`${nameUsu} dime un numero X`))

if (numero < 0){
    console.log(`${numero} es un numero negativo`)
}
else if (numero === 0){
    console.log(`El numero es ${numero}`)
}
else {
    console.log(`${numero} es un numero positivo`)
}

//Ejercicio 9
let lista = 0;
while (lista < 11){
    console.log(lista)
    lista++
}

//Ejercicio 10
const nota = 8
const resul = (nota >= 7 ? 'Aprobaste' : 'Reprobaste')
console.log(resul)

//Ejercicio 11
const numeroAleatorio = Math.floor(Math.random()*20)
console.log(numeroAleatorio)

//Ejercicio 12
const numeroAleatorio2 = Math.floor(Math.random()*10) +1
console.log(numeroAleatorio2)

//Ejercicio 13
const numeroAleatorio3 = Math.floor(Math.random()*1000)+1
console.log(numeroAleatorio3)