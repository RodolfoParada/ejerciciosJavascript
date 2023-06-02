// Ejercicio 36: Crear y asignar propiedades a un objeto

// primera Forma

let computador = {};
computador.procesador = 'Intel Core i7';
computador.ram = 32;
computador.marca = 'MSI';
computador.board = 'ASUS';

console.log(computador.procesador);
computador.procesador = 'Intel Core i7 Octava Generación';
console.log(computador.procesador);

// segunda Forma

computador = {
    procesador: 'Intel Core i7',
    ram: 32,
    marca: 'MSI',
    board: 'ASUS',
    'sistema-operativo': 'windows 10'
}

console.log(computador.procesador);

computador.procesador = 'Intel Core i7 Novena Generación';

console.log(computador.procesador);

computador['tarjeta-grafica'] = 'nvidia Geforce'

console.log(computador['tarjeta-grafica'])