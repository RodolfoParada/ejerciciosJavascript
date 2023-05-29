//Ejercicio 12: Estudia el comportamiento del alcance o contexto funcional

function funcion1() {
    var a = 2;

    function funcion3() {
        var b = 5;

        function funcion5() {
            console.log(a, b)
        }
        funcion5();
    }
    funcion3();
}

function funcion2() {
    var a = 7;

    function funcion4() {
        console.log(a);
    }
    funcion4();
}

funcion1();
funcion2();


//console.log(a); //ReferenceError