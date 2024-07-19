// Ejercicio 1 Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido a la consola ')

//Ejercicio 2 Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
const nombre = 'Juan José'
console.log(`Bienvenido a la consola ${nombre}` )

//Ejercicio 3 Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
const nameUsu = prompt('Escribe tu nombre')
alert(`Hola ${nameUsu} bienvenido`)

//Ejercicio 4 Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
const lenguajeFavorito = prompt(`${nameUsu} escribe tu lenguaje favorito`)
console.log(`${nameUsu} que bueno que te guste ${lenguajeFavorito} este es un lenguaje muy practico`)


//Ejercicio 5 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

const valor1 = 5
const valor2 = 10
const resultado = valor1 + valor2
console.log(`La suma de ${valor1} + ${valor2} es igual a ${resultado}`)

//Ejercicio 6 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
const valor3 = 20
const valor4 = 21
const resta = valor4-valor3
console.log(`La diferencia entre ${valor4} y ${valor3} es igual a ${resta}.`)

//Ejercicio 7  Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
const edad = parseInt(prompt(`${nameUsu} que edad tienes`))

if (edad >= 18){
    console.log(`${nameUsu} Eres mayor de edad ya puedes obtener tu identificación como tal`)
}
else {
    console.log(`${nameUsu} Eres menor de edad no puedes obtener tu identificación como tal`)
}

//Ejercicio 8 Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente. 
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

//Ejercicio 9  Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let lista = 0;
while (lista < 11){
    console.log(lista)
    lista++
}

//Ejercicio 10  Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
const nota = 8
const resul = (nota >= 7 ? 'Aprobaste' : 'Reprobaste')
console.log(resul)

//Ejercicio 11  Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
const numeroAleatorio = Math.floor(Math.random()*20)
console.log(numeroAleatorio)

//Ejercicio 12 Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
const numeroAleatorio2 = Math.floor(Math.random()*10) +1
console.log(numeroAleatorio2)

//Ejercicio 13 Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
const numeroAleatorio3 = Math.floor(Math.random()*1000)+1
console.log(numeroAleatorio3)