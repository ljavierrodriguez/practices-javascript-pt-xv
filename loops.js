/*
for(){}
for(in){}
for(of){}
while(){}
do {} while()
*/

/*
Sintaxis FOR:
 
for(counter; condition,  incremento){
    // sentences to execute
}
 
*/

let nombres = ["Pamela", "Luis", "Miguel", "Ignacio", "Pablo"];
//          1               2                   4
for (let index = 0; index < nombres.length; index++) {
    // 3
    const element = nombres[index];
    console.log(element);
}

/*
Sintaxis FOR IN:
 
for(index in array){
    // sentences to execute
}
 
*/

let frutas = ["Pera", "Manzana", "Uva", "Naranja", "Pera", "Manzana", "Uva", "Naranja", "Pera", "Manzana", "Uva", "Naranja"];

for (let index in frutas) { // retorna el indice donde consigue un elemento
    const element = frutas[index];
    console.log(index + " => " + element);
}

/*
Sintaxis FOR OF:
 
for(element of array){
    // sentences to execute
}
 
*/

let frutas2 = ["Pera", "Manzana", "Uva", "Naranja", "Pera", "Manzana", "Uva", "Naranja", "Pera", "Manzana", "Uva", "Naranja"];

for (let element of frutas2) {  // retorna el elemento conseguido
    console.log(element);
}

/*
Sintaxis WHILE:
 
while(condition){
    // sentences to execute
}
 
*/
let i = 0;
while (i < frutas.length) {
    console.log("Hola " + i);
    const element = frutas[i];
    console.log(i + " => " + element);
    i++;
}


/*
Sintaxis DO WHILE:
 
do {
    // sentences to execute
}
while(condition);
 
*/
let j = 1;
do {
    console.log("Hola " + j);
    j++;
}
while (j <= 10);