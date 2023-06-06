// Ejercicio 38: Determinar a qué tipo de dato pertenece un objeto.

let fecha = new Date();
let error = new Error();
let cadena = new String();
let object = new Object();

console.log(typeof fecha);
console.log(typeof error);
console.log(typeof cadena);
console.log(typeof object);

if (fecha instanceof Date) {
    console.log('La variable `fecha` es de tipo Date.')
} else if (fecha instanceof Error) {
    console.log('la variable `fecha` es de tipo error')
} else if (fecha instanceof cadena) {
    console.log('la ariable `fecha` es de tipo string')
} else {
    console.log('No se pudo determinar el tipo de dato de la variable `fecha`')
}