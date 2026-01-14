
let paises = ["España", "Francia", "Alemania", "Irlanda", "Grecia"];

function mostrarNumeroElementos() {

    let resultadoArray = document.getElementById("resultadoArray");
    resultadoArray.innerHTML = paises.length;

}

function mostrarElementos() {

    let resultadoArray = document.getElementById("resultadoElementos");
    resultadoArray.innerHTML = paises;
}

function mostrarElementosInverso() {

    let resultadoArray = document.getElementById("resultadoInverso");
    resultadoArray.innerHTML = paises.reverse();
}

function mostrarOrdenadosAlfabeticamente() {

    let resultadoArray = document.getElementById("resultadoAlfabeticamente");

    let paisesAlfabetico = paises.sort();

    resultadoArray.innerHTML = paisesAlfabetico;
}

function añadirElementoPrincipio() {

    let inputAñadir = document.getElementById("paisPrincipio").value;
    let resultadoArray = document.getElementById("resultadoAñadirElementoPrincipio");

    paises.unshift(inputAñadir);
    resultadoArray.innerHTML = paises;

}

function añadirElementoFinal() {

    let inputAñadir = document.getElementById("paisFinal").value;
    let resultadoArray = document.getElementById("resultadoAñadirElementoFinal");

    paises.push(inputAñadir);
    resultadoArray.innerHTML = paises;
}

function borrarElementoPrincipio() {

    let resultadoArray = document.getElementById("borrarPrimerPais");

    paises.shift();
    resultadoArray.innerHTML = paises;
}

function borrarElementoFinal() {

    let resultadoArray = document.getElementById("borrarUltimoPais");

    paises.pop();
    resultadoArray.innerHTML = paises;
}

function mostrarElementoPosicion() {

    let resultadoArray = document.getElementById("mostrarElementoPosicion");
    let inputPosicion = document.getElementById("numeroPosicion").value;

    if (inputPosicion > paises.length) {
        resultadoArray.innerHTML = "El array no es tan largo"
    } else {
        resultadoArray.innerHTML = paises[inputPosicion];
    }
}

function mostrarPosicionElemento() {

    let resultadoArray = document.getElementById("mostrarPosicionElemento");
    let inputElemento = document.getElementById("textoPais").value;

    let posicion = paises.indexOf(inputElemento);

    if (paises.includes(inputElemento)) {
        resultadoArray.innerHTML = posicion;
    } else {
        resultadoArray.innerHTML = "Ese pais no está en el array";
    }

}

function mostrarElementosIntervalo() {

    let resultadoArray = document.getElementById("mostrarElementosIntervalo");
    let inputIntervaloPrincipio = document.getElementById("intervaloPrinc").value;
    let inputIntervaloFin = document.getElementById("intervaloFin").value;

    resultadoArray.innerHTML = paises.slice(inputIntervaloPrincipio, inputIntervaloFin);


}

/*
*
*   SEGUNDA PARTE DEL EJERCICIO
*
*/

function mostrarNumero() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");
    resultadoArray.innerHTML = paises.length + " Paises";

}

function listadoPaises(){

    let opcionesPaises = document.getElementById('opcionesPaisesListado');
    opcionesPaises.innerHTML = `
        <p>¿Cómo deseas listar los países?</p>
        <button onclick="listadoPaisesReves()">Al Revés</button>
        <button onclick="listadoPaisesOrdenados()">Ordenados</button>
    `;

}

    
function listadoPaisesReves() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");
    resultadoArray.innerHTML = paises.reverse();

}

function listadoPaisesOrdenados() {


    let resultadoArray = document.getElementById("ArrayTiempoReal");

    let paisesAlfabetico = paises.sort();

    resultadoArray.innerHTML = paisesAlfabetico;    

}
function intervaloPaises() {

    let inputsIntervalo = document.getElementById("inputsIntervalo");
    inputsIntervalo.innerHTML = `
    <p> Inserta los dos valores, inicio y final: </p>
    <input type="number" id="primerValor">
    <br/>
    <input type="number" id="segundoValor">
    <br/>
    <button onclick="obtenerValoresFiltrado()">Mostrar Intervalo</button>
    `
}

function obtenerValoresFiltrado() {

    let principio = document.getElementById("primerValor").value;
    let final = document.getElementById("segundoValor").value;
    let resultadoArray = document.getElementById("ArrayTiempoReal");

    resultadoArray.innerHTML = paises.slice(principio, final);

}

function añadirPais() {
 
    let añadirDiv = document.getElementById("añadirElecciones");
    añadirDiv.innerHTML = `
    <p> ¿Qué país quieres añadir? </p>
    <br/>
    <input type="text" id="paisAñadir">
    <br/>
    <p> ¿Quieres que se añada al principio o al final? </p>
    <br/>
    <button onclick="añadirPaisPrincipio()">Al Principio</button>
    <button onclick="añadirPaisFinal()">Al Final </button>
    `    
}

function añadirPaisPrincipio() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");
    let elemento = document.getElementById("paisAñadir").value;
    paises.unshift(elemento);

    resultadoArray.innerHTML = paises;
}

function añadirPaisFinal() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");
    let elemento = document.getElementById("paisAñadir").value;
    paises.push(elemento);

    resultadoArray.innerHTML = paises;    
}

function borrarPais() {

    let paisesBorrar = document.getElementById("paisesBorrar");
    paisesBorrar.innerHTML = `
    <p>¿Qué país quieres borrar?</p>
    <br/>
    <button onclick="borrarPaisPrincipio()">Principio</button>
    <br/>
    <button onclick="borrarPaisFinal()">Final</button>
    `
}


function borrarPaisPrincipio() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");

    paises.shift();
    resultadoArray.innerHTML = paises;
}

function borrarPaisFinal() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");

    paises.pop();
    resultadoArray.innerHTML = paises;
}

function consultar() {
    
    let consultarDiv = document.getElementById("consultarDiv");

    consultarDiv.innerHTML = `
    <p>¿Quieres consultar en el array por posición o por nombre?</p>
    <br/>
    <button onclick="redirigirPosicion()">Por Posición </button>
    <br/>
    <button onclick="redirigirNombre()">Por Nombre </button>
    `
}

function redirigirPosicion() {
    let posicionDiv = document.getElementById("consultarDivPosicion");

    posicionDiv.innerHTML = `
    <p>¿Qué estado quieres ver en el array? (Inserta la posicion) </p>
    <br/>
    <input type="text" id="posicion">
    <br/>
    <button onclick="consultarPaisPosicion()">Mostrar</button>
    `
}

function redirigirNombre() {
    let estadoDiv = document.getElementById("consultarDivNombre");

    estadoDiv.innerHTML = `
    <p>¿Qué posicion quieres ver en el array? (Inserta el estado) </p>
    <br/>
    <input type="text" id="nombre">
    <br/>
    <button onclick="consultarPaisNombre()">Mostrar</button>
    `

}
function consultarPaisPosicion() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");

    let posicion = document.getElementById("posicion").value;

    if (posicion > paises.length) {
        resultadoArray.innerHTML = "El array no es tan largo"
    } else {
        resultadoArray.innerHTML = paises[posicion];
    }

}

function consultarPaisNombre() {

    let resultadoArray = document.getElementById("ArrayTiempoReal");
    let inputElemento = document.getElementById("nombre").value;

    let posicion = paises.indexOf(inputElemento);

    if (paises.includes(inputElemento)) {
        resultadoArray.innerHTML = posicion;
    } else {
        resultadoArray.innerHTML = "Ese pais no está en el array";
    }

}

