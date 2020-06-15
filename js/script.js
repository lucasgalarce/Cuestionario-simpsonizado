const btn = document.getElementById('enviar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');

let total = 0;

const preg1 = document.getElementById('preg1');
const rta1 = document.getElementById('rta1');
const preg2 = document.getElementById('preg2');
const rta2 = document.getElementById('rta2');


btn.addEventListener('click', (ev) => {
    ev.preventDefault();

    // Validaciones

    // Nombre
    if (nombre.value.length < 3) {
        nombre.style.border = "2px solid red";
    }
    else {
        nombre.style.border = "2px solid green";
    }

    // Apellido
    if (apellido.value.length < 3) {
        apellido.style.border = "2px solid red";
    }
    else {
        apellido.style.border = "2px solid green";
    }

    // Pregunta 1

    if (rta1.checked) {
        total += 10
        preg1.style.color = "green";

    } else {
        preg1.style.color = "red";
    }

    // Pregunta 2

    if (rta2.checked) {
        total += 10
        preg2.style.color = "green";

    } else {
        preg2.style.color = "red";
    }



});