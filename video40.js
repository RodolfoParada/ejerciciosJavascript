// ejercicio 40 determinar si una variable es un objeto plano

let objectoPlano1 = {};
let objectoPlano2 = new Object();

let fecha = new Date();
let cadena = new String();


console.log(objectoPlano1.constructor === Object);
console.log(objectoPlano2.constructor === Object);

console.log();

console.log(fecha.constructor === Object);
console.log(cadena.constructor === Object);