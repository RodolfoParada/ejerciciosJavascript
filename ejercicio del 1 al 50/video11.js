//Ejercicio 11: Resolver problemas de referencia de variables.

//Error típico:
//ReferenciaError: <<identificador>> is not defined


function mostraSaludo() {
    var mensaje = 'Hola... Este código se ejecuta en una función';

    console.log(mensaje);
}

// console.log(mensaje); // ReferenceError: <<identificador>> is not defined

var numero = 7;

function mostrarNumero() {
    console.log('El número es: ' + numero);
}

mostrarNumero();