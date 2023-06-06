//https://www.youtube.com/watch?v=h8l0s5mO3AU&list=PL2PZw96yQChxuJMja3Aq--5AfBPCMc1kL&index=43

// Ejercicio  43 : usar el método forEach para recorrer un arreglo


let lenguajes = ['JavaScript', 'C#', 'Php', 'Java', 'Python'];

lenguajes.forEach(function (valor, indice, lenguajes) {
    console.log(`${valor} se encuentra en el índice ${indice}`);
});

console.log();

function recorridoArreglo(valor, indice, lenguajes) {
    console.log(`${valor} se encuentra en el índice ${indice}`);
}

lenguajes.forEach(recorridoArreglo);

console.log();

lenguajes.forEach((valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el índice ${indice}`);
});

console.log();


let recorrerArreglo = (valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el índice ${indice}`);

};

lenguajes.forEach(recorrerArreglo);