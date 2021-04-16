/*
String
Number
Boolean
Undefined
Object
    Array
    Object Literal
    Null
*/

/*
    String = "", '', ``
    Number = -1, 1, 1.1
    Boolean = true, false
    Undefined = undefined

    Object =
        Array = [], array()
        Object Literal = { attr: value }
        Null = null
*/

// var, let, const // Recomendation: No use (var)
// let o const + variable = valor;

let name = "Luis";
let age = 54;
let salario = 450.65;
let active = false;
let gender = null;
let luckyNumbers = [12, 81, 24, 7];
let idiomas = {
    idioma: 'Spanish',
    nivel: 'Native'
}
let persona_A = {
    name: 'Pamela',
    lastname: 'Perez'
}
let persona_B = {
    name: 'Fernando',
    lastname: 'Olivares'
}
let lastname;

const PI = 3.14;


// Caso Especial (Array)

let personas = [
    { name: 'Luis' }, // 0
    { name: 'Pamela' }, // 1
    { name: 'Gabriel' } // 2
]

let valores = [{}, true, null, [], "", 12]