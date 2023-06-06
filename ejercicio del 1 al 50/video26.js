// Ejercicio 26: Promocionar de valoraciones a tipo cadena de caracteres (String).

console.log(String('Javascript'));
console.log(String(5));
console.log(typeof String(5));
console.log(String(false));
console.log(String(true));


let objeto = {
    nombre: 'Germán Ortiz',
    id: 123456789
}

console.log(String(objeto));


let numeros = [2, 3, 5, 7]
console.log(String(numeros)); // crear la representacion cadena caracteres 
console.log(numeros.join(','))

let sumar = (a, b) => {
    return a + b;
};
console.log(String(sumar))


console.log()

console.log(String(null))
console.log(String(undefined))

console.log()


console.log(String(/abc/))

objeto = {
    toString: function () {
        return '¡Hola!';
    }
}
console.log(String(objeto))