//Ejercicio 1
const welcomeMessage = alert('Hello welcome to our website!!!')

//Ejercicio 2
const nombre = 'Luna'

//Ejercicio 3
let numeroVentas = 50

//Ejercicio 4
let saldoDisponible = 1000

//Ejercicio 5
alert('Error, fill in all fields')

//Ejercicio 6
const errorMessage1 = 'Error, fill in all fields!!'

alert(errorMessage1)
console.log(errorMessage1)

//Ejercicio 7

const nombreUsuario = prompt('Ingresa tu nombre')

const edad = parseInt(prompt('Ingresa tu edad'))

if (edad >= 18 ){
    alert('Felicidades ' + nombreUsuario +' puedes obtener tu licencia de conducción')
}
else {
    alert('Lo sentimos '+ nombreUsuario +' no puedes obtener tu licencia de conducción aun no tienes la edad suficiente')
}