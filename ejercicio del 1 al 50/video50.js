// Ejercicio 50: Usar el contenido de una variable en una cadena


let numero = 6;
let cadena = 'Javascript numero';
console.log(cadena)
cadena = "Javascript numero";
console.log(cadena);

cadena = `Javascript ${numero + 1}`;
console.log(cadena);

console.log();

let persona = {
    nombre: 'Edward',
    apellido: 'Ortiz',
    id: 101
};

console.log('Su nombre completo es ' + persona.nombre + ' ' + persona.apellido + 'y su ID es ' + persona.id)

console.log(`Su nombre completo es ${persona.nombre} ${persona.apellido}  y su ID es ${persona.id}`)