let numeroAzar = Math.floor(Math.random()*100) + 1

let nomeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Introducir numero valido entre 1 y 100'
        return 
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'Numero adivinado! Felicitaciones!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'El numero es mayor al que dijiste!';
        mensaje.style.color = 'red';
    } else{
        mensaje.textContent = 'El numero es menor al que dijiste!';
        mensaje.style.color= 'red';
    }
}