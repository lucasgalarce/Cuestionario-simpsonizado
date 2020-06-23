const btn = document.getElementById('enviar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');

let total;

const preg1 = document.getElementById('preg1');
const rta1 = document.getElementById('rta1');
const preg2 = document.getElementById('preg2');
const rta2 = document.getElementById('rta2');
const preg3 = document.getElementById('preg3');
const rta3 = document.getElementById('rta3');
const preg4 = document.getElementById('preg4');
const rta4 = document.getElementById('rta4');
const preg5 = document.getElementById('preg5');
const rta5 = document.getElementById('rta5');
const preg6 = document.getElementById('preg6');
const rta6 = document.getElementById('rta6');
const preg7 = document.getElementById('preg7');
const rta7 = document.getElementById('rta7');
const preg8 = document.getElementById('preg8');
const rta8 = document.getElementById('rta8');
const preg9 = document.getElementById('preg9');
const rta9opc1 = document.getElementById('rta9opc1');
const rta9opc2 = document.getElementById('rta9opc2');
const rta9opc3 = document.getElementById('rta9opc3');
const rta9opc4 = document.getElementById('rta9opc4');
const preg10 = document.getElementById('preg10');
const rta10 = document.getElementById('rta10');

const result = document.getElementById('result');




btn.addEventListener('click', (ev) => {
    ev.preventDefault();

    // Reinicio total
    total = 0;

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

    // Pregunta 3

    if (rta3.checked) {
        total += 10
        preg3.style.color = "green";

    } else {
        preg3.style.color = "red";
    }

    // Pregunta 4

    if (rta4.checked) {
        total += 10
        preg4.style.color = "green";

    } else {
        preg4.style.color = "red";
    }

    // Pregunta 5

    if (rta5.checked) {
        total += 10
        preg5.style.color = "green";

    } else {
        preg5.style.color = "red";
    }

    // Pregunta 6
    console.log(rta6.value)


    if (rta6.value.toLowerCase() == 'abraham') {
        total += 10
        preg6.style.color = "green";
        rta6.style.border = "1px solid green"

    } else {
        preg6.style.color = "red";
        rta6.style.border = "1px solid red"
    }

    // Pregunta 7

    if (rta7.checked) {
        total += 10
        preg7.style.color = "green";

    } else {
        preg7.style.color = "red";
    }

    // Pregunta 8

    if (rta8.value.toLowerCase() == 'max power') {
        total += 10
        preg8.style.color = "green";
        rta8.style.border = "2px solid green"

    } else {
        preg8.style.color = "red";
        rta8.style.border = "2px solid red"
    }

    // Pregunta 9

    if (rta9opc1.checked && !rta9opc2.checked && rta9opc3.checked && rta9opc4.checked) {
        total += 10
        preg9.style.color = "green";

    } else {
        preg9.style.color = "red";
    }

    // Pregunta 10

    if (rta10.checked) {
        total += 10
        preg10.style.color = "green";

    } else {
        preg10.style.color = "red";
    }

    // Limpio result
    result.innerHTML = "";

    // Creo dos nuevos elemento p
    const newP = document.createElement("p");
    const newP2 = document.createElement("p");

    // Creo imagen para la clase desaprobado
    const imgDesaprobado = document.createElement('img');
    imgDesaprobado.src = "img/desaprobado.jpg"

    // Creo imagen para la clase aprobado
    const imgAprobado = document.createElement('img');
    imgAprobado.src = "img/aprobado.jpg"

    // Creo imagen para la clase sobresaliente
    const imgSobresaliente = document.createElement('img');
    imgSobresaliente.src = "img/sobresaliente.jpg"


    // Inserto el nuevo elemento p en el div result que esta en nuestro html.
    newP.innerHTML = `${nombre.value} ${apellido.value} Has obtenido una puntuacion de ${total}`;

    // Evaluo que puntuacion saco para darle un estilado y mensaje personalizado
    if (total <= 40) {
        result.className = "desaprobado";
        newP2.innerHTML = `Aun te falta mucho para ser un experto`;
        result.appendChild(imgDesaprobado);

    } else if (total <= 79) {
        result.className = "aprobado";
        newP2.innerHTML = `Casi eres un experto`;
        result.appendChild(imgAprobado);

    } else if (total >= 80) {
        result.className = "sobresaliente";
        newP2.innerHTML = `¡Sos intelectual, muy inteligente!`;
        result.appendChild(imgSobresaliente);
    }

    // Agrego los parrafos 
    result.appendChild(newP)
    result.appendChild(newP2)

});


