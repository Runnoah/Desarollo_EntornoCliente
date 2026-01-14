class Disco {
        constructor(nombre = "", grupo = "", año = "", tipo = "", localizacion = 0) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }

    cambiarEstado(nuevoPrestado) {
        this.prestado = nuevoPrestado;
    }
}

let discosFormulario = [];

function guardarDiscos() {

    let nombre = document.getElementById("nombre").value;
    let grupo = document.getElementById("cantante").value;
    let año = document.getElementById("año").value;
    let tipo = document.getElementById("tipo").value;
    let localizacion = document.getElementById("localizacion").value;
    let prestado = document.getElementById("prestado").checked;

    if (nombre === "" || grupo === "" || año === "" || localizacion === "") {
        alert("Rellena todos los campos");
        return;
    }

    let nuevoDisco = new Disco(nombre, grupo, parseInt(año), tipo, parseInt(localizacion))

    if (prestado) {
        nuevoDisco.cambiarEstado(true);
    }

    discosFormulario.push(nuevoDisco);
    console.log("Nuevo disco guardado:", nuevoDisco);
    alert("Disco guardado: " + nuevoDisco.nombre + " de " + nuevoDisco.grupo); 
}