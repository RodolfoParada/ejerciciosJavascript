// Ejercicio 41: Realizar operaciones basicas sobre arreglos o listas

// Creación :

let lenguajes = ['Javascript', 'Python', 'Java', 'PHP'];

console.log(lenguajes.length);

//Acces0

console.log(lenguajes[0])
console.log(lenguajes[1])
console.log(lenguajes[2])
console.log(lenguajes[3])

lenguajes[0] = 'javascript es6';
console.log(lenguajes[0]);
delete lenguajes[3]; // borra el contenido no el indice
console.log(lenguajes.length);

lenguajes.pop();

console.log(lenguajes.length);

let numeros = new Array(5);

numeros = [1, 2, 3, 4, 5]
console.log(numeros)