class Disco {
    constructor(nombre = "", grupo = "", año = "", tipo = "", localizacion = 0) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }

    cambiarEstado(nuevoEstado) {
        this.prestado = nuevoEstado;
    }
}

let discosFormulario = [];

function ponerRojo(elemento, error) {
    if (error == true) {
        elemento.style.border = "2px solid red";
        elemento.parentElement.style.color = "red"; 
    } else {
        elemento.style.border = "";
        elemento.parentElement.style.color = ""; 
    }
}

function validador(elemento) {
    let valor = elemento.value.trim(); 

    if (valor == "" || valor.length > 20) {
        ponerRojo(elemento, true);
        return false;
    } else {
        ponerRojo(elemento, false);
        return true;
    }
}

function guardarDiscos() {

    let nombre = document.getElementById("nombre");
    let grupo = document.getElementById("cantante"); 
    let año = document.getElementById("año");
    let tipo = document.getElementById("tipo");
    let localizacion = document.getElementById("localizacion");
    let prestado = document.getElementById("prestado");

    let hayError = false;

    if (validador(nombre) == false) {
        hayError = true;
    }

    if (validador(grupo) == false) {
        hayError = true;
    }

    let valorAño = parseInt(año.value);
    if (año.value == "" || valorAño < 1000 || valorAño > 2026) {
        ponerRojo(año, true);
        hayError = true;
    } else {
        ponerRojo(año, false);
    }

    let valorLoc = parseInt(localizacion.value);
    
    if (localizacion.value != "" && isNaN(valorLoc)) { 
        ponerRojo(localizacion, true);
        hayError = true;
    } else {
        ponerRojo(localizacion, false);
    }

    if (hayError == true) {
        alert("Revisa los datos introducidos");
        return; 
    }

    let nuevoDisco = new Disco(
        nombre.value, 
        grupo.value, 
        parseInt(año.value), 
        tipo.value, 
        parseInt(localizacion.value)
    );

    if (prestado.checked == true) {
        nuevoDisco.cambiarEstado(true);
    }

    discosFormulario.push(nuevoDisco);
    
    console.log("Disco nuevo:", nuevoDisco);
    alert("Disco guardado: " + nuevoDisco.nombre);

    document.getElementById("formulario").reset();
    
    ponerRojo(nombre, false);
    ponerRojo(grupo, false);
    ponerRojo(año, false);
    ponerRojo(localizacion, false);
}