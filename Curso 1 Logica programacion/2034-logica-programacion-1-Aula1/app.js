const numeroMaximo = 10
let numeroSecreto = Math.floor(Math.random() *numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 0;
let numIntentos = 5

while (numeroUsuario !== numeroSecreto){
    numeroUsuario = parseInt(prompt(`Adivina un numero entre 1 y ${numeroMaximo}`),10);
    console.log(numeroUsuario);
    if ( isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > numeroMaximo){
        alert('Por favor, ingresa un número válido entre 1 y 100');
        continue;
    }
    intentos++;
    if (numeroUsuario === numeroSecreto) {
        alert(`Felicitaciones, has acertado el numero ganador: ${numeroUsuario} y tu numero de intentos fue: ${intentos}`);
        break;
    }
    if (intentos >= numIntentos){
        alert(`Haz alcanzado el numero maximo de intentos, haz perdido y el numero era ${numeroSecreto}`);
        break;
    } 
    if (numeroUsuario < numeroSecreto){
        alert("El numero es mayor a tu numero")
    }
    else if (numeroUsuario > numeroSecreto){
        alert("El numero es menor a tu numero")
    }

} 