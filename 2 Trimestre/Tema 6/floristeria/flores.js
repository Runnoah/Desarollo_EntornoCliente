function generarPlanta() {
    //Me he comido 2 videos de dom en la primera hora en youtube pq no lo pillaba la verdad

    let nombre = prompt("Nombre de la planta:");
    let ubicacion = prompt("Ubicación de la planta:");
    let ejemplares = prompt("Ejemplares:");
    let flor = prompt("Flor:");

    let tabla = document.getElementById("tabla");

    let fila = document.createElement("tr");
    let espacio1 = document.createElement("td");
    let espacio2 = document.createElement("td");
    let espacio3 = document.createElement("td");
    let espacio4 = document.createElement("td");

    espacio1.innerHTML = nombre;
    espacio2.innerHTML = ubicacion;
    espacio3.innerHTML = ejemplares;
    espacio4.innerHTML = flor;

    fila.appendChild(espacio1);
    fila.appendChild(espacio2);
    fila.appendChild(espacio3);
    fila.appendChild(espacio4);
    
    tabla.appendChild(fila);
}

function borrarFila() {
    let tabla = document.getElementById("tabla");
    
    let filas = tabla.getElementsByTagName("tr");

    if (filas.length > 1) {

        let ultimaFila = filas[filas.length - 1];
        tabla.removeChild(ultimaFila);
    }
}

function mostrarNumFilas() {
    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    let resultado = document.getElementById("resultado");    
    resultado.innerHTML = "Total plantas: " + (filas.length - 1);
}