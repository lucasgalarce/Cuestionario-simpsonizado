const btn = document.getElementById('enviar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');

const respuesta1 = document.getElementById('respuesta1');
const resultado1 = document.getElementById('resultado1');

btn.addEventListener('click', (ev) => {
    ev.preventDefault();

    // Validaciones

    // Nombre
    if(nombre.value.length < 3){
        nombre.style.border = "2px solid red";
    }
    else {
        nombre.style.border = "2px solid green";
    }

    // Apellido
    if(apellido.value.length < 3){
        apellido.style.border = "2px solid red";
    }
    else {
        apellido.style.border = "2px solid green";
    }


});