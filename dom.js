/*
document.getElementById('valor');
*/

/* let btn = document.getElementById('btn');
console.log(btn); */
/*
document.getElementsByClassName('valor');
*/

/* let links = document.getElementsByClassName('link-home'); // [] todos los elementos que contiene la clase link-home dentro del atributo class
console.log(links);


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
        event.preventDefault();
        console.log(event.target.innerHTML);
    })
} */

/*
document.getElementsByTagName('valor')
*/

let divs = document.getElementsByTagName('div');
console.log(divs);

/*
document.getElementsByName('valor')
*/

let payments = document.getElementsByName('payments');
console.log(payments);

for (let i = 0; i < payments.length; i++) {
    if (payments[i].checked) {
        console.log(payments[i].value)
    }
}


/*
document.querySelector('selector');
*/

let btn = document.querySelector('#btn');


/*
document.querySelectorAll('selector')
*/

let links = document.querySelectorAll('.link-home');


let cols = document.querySelectorAll('.row .col-md-3');
//console.log(cols);

cols.forEach(function (col, index, arr) { // valor, index, arr
    console.log(arr);
    let span = document.createElement('span');
    span.innerHTML = "Col";

    col.classList.add('color');
    col.innerHTML = index * 1 + 1;
    col.appendChild(span);
})


let caja = document.querySelector('.caja');

for (let i = 0; i < 5; i++) {
    let cajita = document.createElement('div');
    cajita.style.width = "80px";
    cajita.style.height = "30px";
    cajita.style.backgroundColor = "red";
    cajita.style.margin = "1px";
    caja.appendChild(cajita);
}

let tbl_users = document.querySelector('#users');
let arr_users = [
    { nombre: "Pamela", apellido: "Diaz" },
    { nombre: "Juan", apellido: "Perez" },
    { nombre: "Diego", apellido: "De la Vega" }
]

for (let i = 0; i < arr_users.length; i++) {
    let tr = document.createElement('tr');
    let tdN = document.createElement('td');
    let tdA = document.createElement('td');

    tdN.innerHTML = arr_users[i].nombre;
    tdA.innerHTML = arr_users[i].apellido;

    tr.appendChild(tdN);
    tr.appendChild(tdA);

    tbl_users.appendChild(tr);
}



function createBtnPayment() {
    let btn = document.createElement('button');
    btn.innerHTML = "Pagar Ahora"
    btn.classList.add('btn-payment');
    btn.addEventListener('click', function () {
        alert("Me voy a pagar");
    })
    return btn;
}

document.body.appendChild(createBtnPayment());