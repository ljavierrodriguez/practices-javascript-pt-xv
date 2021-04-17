/*
// funciones de nombre

function nombreFuncion(){
    // sentences to execute
}

// functones declarativas

variable = function(){ // funcion anonima

}

variable = () => { // funcion anonima de flecha

}

*/
// Declaracion de la funcion (definicion)
/* function saludo() {
    console.log("Hola Luis");
} */

// Ejecucion de la funcion
/* saludo(); */


/* let suma = function (a, b) { // (a,b) son los argumentos o parametros de la funcion
    return "Resultado: " + (a + b);
}

suma(5, 4); */

/* let numeroMayor = (a, b) => {  // (a,b) son los argumentos o parametros de la funcion
    let mayor;
    if (a > b) { // evaluo si a es mayor que b
        mayor = a; // si a es mayor asigno el valor A en mayor
    } else {
        mayor = b; // si b es mayor asigno el valor B en mayor
    }
    return mayor; // retorno mayor
} */
/* 
console.log(numeroMayor(20, 15));
let resultado = numeroMayor(20, 15);
console.log(resultado);
 */

/* function operacion(oper, a, b) {
    let resultado = 0;
    if (oper == "suma") {
        resultado = suma(a, b);
    } else if (oper == "numeroMayor") {
        resultado = numeroMayor(a, b)
    }

    return resultado
}

console.log(operacion("suma", 10, 14));
console.log(operacion("numeroMayor", 10, 14)); */


/* function contarDel1Al10() {
    for (let index = 1; index <= 10; index++) {
        console.log(index);
    }
}


contarDel1Al10(); */


/* function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(17)); */
// 1 1 2 3 5 8 13 21 34 55 89 

let datos = [1, 2, 3, 4, 5, 6, 7, 8]; // 0 - 7
let numeros = [];
let usados = [];

function generarNumero(arr = []) {
    let nr = Math.floor(Math.random() * arr.length);
    console.log("->" + nr); // 1
    if (usados.indexOf(nr) == -1) {
        numeros.push(arr[nr]);
        usados.push(nr);
    }

    if (numeros.length < 8) return generarNumero(arr);
}

generarNumero(datos);

console.log(numeros);
console.log(usados);