/*
if ( condition ){ // Solo se ejecuta si la condicion retorna verdadero (true)
    // sentences to execute
}

// caso contrario
if ( condition ){ // Solo se ejecuta si la condicion retorna verdadero (true)
    // sentences to execute
} else {
    // sentences to execute // Solo se ejecuta si la condicion retorna fals0o (false)
}

// nested if
if ( condition ){ // Solo se ejecuta si la condicion retorna verdadero (true)
    // sentences to execute
} else if ( condition ) {
    // sentences to execute
} else {
    // sentences to execute // Solo se ejecuta si la condicion retorna fals0o (false)
}


*/
/*
Operadores de Comparacion
----------------------------------

=== => Evalua tanto el valor como tipo de dato son iguales
== -> Evalu solo el valor si es igual
!== -> Evalua tanto el valor como el tipo de dato si son distintos
!= -> Evalua el valor si son distintos
> -> Evalua si el valor es mayor al otro
< -> Evalua si el valor es menor al otro
>= -> Evalua si el valor es mayor o igual al otro
<= -> Evalua si el valor es menor o igual al otro

*/

let a = 5;
let b = 6;
let num = 20;

// If
if (a === b) {
    // true
}

// If - Else
if (a >= b) {
    // true
} else {
    // false
}

// Nested IF
if (a === b) {
    // true
} else if (a >= b) {
    // true
} else if (a <= b) {
    // true
}

// Operador Logico AND (&&)
if (num % 3 == 0 && num % 5 == 0 || num % 10 == 0) { // las dos condiciones debe retornar verdadero (true)
    // true
    console.log(1)
} else if (num % 5 == 0) {
    // true
    console.log(2)
} else if (num % 3 == 0) {
    // true
    console.log(3)
} else {
    // false
    console.log(4)
}

// Operador Logico OR (||)
if (num % 3 == 0 || num % 5 == 0) { // Al menos una condicion debe retornar verdadero (true)
    // true
}

// Operador Logico NOT (!)
if (!a === b) { // false => true <> true => false
    // true
}

let edad = 39;

if (edad >= 10 && edad <= 20 || edad >= 40 && edad <= 60) {
    console.log("Edades");
}
