function saludo(msg) {
    alert(msg);
}

let btn = document.getElementById('btn');

btn.addEventListener('click', function (evento) {
    console.log(evento.type)
    console.log(evento.target)
    saludo("hola");
})