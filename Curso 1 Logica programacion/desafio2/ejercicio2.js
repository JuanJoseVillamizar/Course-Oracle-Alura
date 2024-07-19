// ejercicio 1

let diaElegidoUsuario = prompt('¿Que día de la semana es hoy?')
let diaUsuario = diaElegidoUsuario.charAt(0).toUpperCase()
console.log(diaUsuario)
diaUsuario = diaUsuario + diaElegidoUsuario.substring(1).toLocaleLowerCase()
diaElegidoUsuario = diaUsuario
console.log(diaElegidoUsuario)

while (
    diaElegidoUsuario !== 'Lunes' && 
    diaElegidoUsuario !== 'Martes' && 
    diaElegidoUsuario !== 'Miercoles' && 
    diaElegidoUsuario !== 'Jueves' && 
    diaElegidoUsuario !== 'Viernes' && 
    diaElegidoUsuario !== 'Sabado' && 
    diaElegidoUsuario !== 'Domingo'){
    diaElegidoUsuario = prompt('¿Debes elegir un dia de la semana?')
    diaUsuario = diaElegidoUsuario.charAt(0).toUpperCase() + diaElegidoUsuario.substring(1).toLocaleLowerCase()
    diaElegidoUsuario = diaUsuario
}

if (diaElegidoUsuario === 'Lunes' || 
    diaElegidoUsuario === 'Martes' || 
    diaElegidoUsuario === 'Miercoles' || 
    diaElegidoUsuario === 'Jueves' || 
    diaElegidoUsuario === 'Viernes'){
    alert('¡Buena semana!')
}

if (diaElegidoUsuario === 'Sabado' || 
    diaElegidoUsuario === 'Domingo'){
    alert('¡Buen fin de semana!')


}

// ejercicio 2


let numero = parseInt(prompt ('Ingresa un numero y te dire si es positivo o negativo'))

while (isNaN(numero)){
    numero = parseInt(prompt ('Ingresa un numero y te dire si es positivo o negativo'))
}

if (numero > 0){
    alert('Tu numero es positivo')
}
else if (numero < 0) {
    alert('tu numero es negativo')
}
else {
    alert('Tu numero es 0')
}

// ejercicio 3

let puntuacion = parseInt(prompt ('Ingresa la puntuación que obtuviste'))

while (isNaN(puntuacion)){
    puntuacion = parseInt(prompt ('Ingresa la puntuación que obtuviste'))
}
if (puntuacion >= 100) {
    alert('¡Felicidades, has ganado!')
} else {
    alert('Intentalo nuevamente para ganar.')
}



// ejercicio 4

const saldo = 23000

alert(`Tu saldo es de: ${saldo} pesos`)




// ejercicio 5

const nombre = prompt('Ingresa tu nombre')

while (nombre === '' && !isNaN(nombre)){
    nombre = prompt('Ingresa tu nombre')
}

let nombreMayus = nombre.charAt(0).toLocaleUpperCase() + nombre.substring(1).toLocaleLowerCase();

alert(`Bienvenido a nuestro sitio web ${nombreMayus}`)