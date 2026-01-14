class Disco {
    constructor(nombre = "", grupo = "", año = "", tipo = "", localizacion = 0) {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }

    cambiarEstanteria(numero) {
        this.localizacion = numero;
    }

    cambiarPrestado(nuevoEstado) {
        this.prestado = nuevoEstado;
    }

    obtenerInfo() {
        return "Disco: " + this.nombre + " | Grupo: " + this.grupo + " | Año: " + this.año + " | Tipo: " + this.tipo + " | Loc: " + this.localizacion + " | Prestado: " + this.prestado;
    }
}

let discos = [];

discos.push(new Disco("Nevermind", "Nirvana", "1991", "rock", 1));
discos.push(new Disco("Thriller", "Michael Jackson", "1982", "pop", 2));
discos.push(new Disco("Dookie", "Green Day", "1994", "punk", 3));

function mostrarMensaje(mensaje) {
    const div = document.getElementById("resultados");
    div.innerHTML += "<p>" + mensaje + "</p>";
}

function limpiarPantalla() {
    document.getElementById("resultados").innerHTML = "";
}

function verNumeroDiscos() {
    mostrarMensaje("<h3>Número total de discos: " + discos.length + "</h3>");
}

function gestionarListado() {
    let orden = prompt("1. Orden original\n2. Del revés\n3. Alfabéticamente");
    
    mostrarMensaje("<h3>Listado de Discos</h3>");

    if (orden === "1") {
        for (let disco of discos) {
            mostrarMensaje(disco.obtenerInfo());
        }
    } 
    else if (orden === "2") {
        let inverso = discos.slice().reverse();
        for (let disco of inverso) {
            mostrarMensaje(disco.obtenerInfo());
        }
    } 
    else if (orden === "3") {
        let ordenados = discos.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
        for (let disco of ordenados) {
            mostrarMensaje(disco.obtenerInfo());
        }
    } else {
        alert("Opción no válida");
    }
}

function gestionarIntervalo() {
    let intervalo = prompt("Introduce el intervalo inicio-fin (ejemplo: 0-2)");
    if (!intervalo) return;

    let partes = intervalo.split("-");
    if (partes.length !== 2) {
        alert("Formato incorrecto. Usa el guion (ej: 0-2)");
        return;
    }
    let inicio = parseInt(partes[0]);
    let fin = parseInt(partes[1]);

    mostrarMensaje("<h3>Discos del " + inicio + " al " + fin + "</h3>");

    if (inicio >= 0 && fin < discos.length) {
        for (let i = inicio; i <= fin; i++) {
            mostrarMensaje(discos[i].obtenerInfo());
        }
    } else {
        mostrarMensaje("Intervalo incorrecto o fuera de rango.");
    }
}

function añadirDisco() {
    let nombre = prompt("Nombre del disco:");
    if (!nombre) return;
    let grupo = prompt("Grupo:");
    let año = prompt("Año:");
    let tipo = prompt("Tipo (rock, pop, punk, indie):");
    let localizacion = prompt("Localización (número):");

    let nuevoDisco = new Disco(nombre, grupo, año, tipo, localizacion);
    
    let posicion = prompt("¿Añadir al principio (1) o al final (2)?");

    if (posicion === "1") {
        discos.unshift(nuevoDisco);
        mostrarMensaje("<h3>Disco añadido al principio: " + nombre + "</h3>");
    } else {
        discos.push(nuevoDisco);
        mostrarMensaje("<h3>Disco añadido al final: " + nombre + "</h3>");
    }
}

function borrarDisco() {
    let posicion = prompt("¿Borrar del principio (1) o del final (2)?");
    
    if (posicion === "1") {
        let borrado = discos.shift();
        if (borrado) {
            mostrarMensaje("<h3>Disco borrado del principio: " + borrado.nombre + "</h3>");
        } else {
            alert("No hay discos para borrar.");
        }
    } else if (posicion === "2") {
        let borrado = discos.pop();
        if (borrado) {
            mostrarMensaje("<h3>Disco borrado del final: " + borrado.nombre + "</h3>");
        } else {
            alert("No hay discos para borrar.");
        }
    }
}

function consultarDisco() {
    let tipoConsulta = prompt("¿Consultar por posición (1) o por nombre (2)?");

    if (tipoConsulta === "1") {
        let pos = parseInt(prompt("Introduce la posición (0 a " + (discos.length - 1) + "):"));
        if (discos[pos]) {
            mostrarMensaje("<h3>Consulta por posición " + pos + ":</h3>" + discos[pos].obtenerInfo());
        } else {
            alert("Posición no válida");
        }
    } else if (tipoConsulta === "2") {
        let nombreBusqueda = prompt("Introduce el nombre exacto del disco:");
        let encontrado = discos.find(d => d.nombre === nombreBusqueda);
        
        if (encontrado) {
            mostrarMensaje("<h3>Consulta por nombre (" + nombreBusqueda + "):</h3>" + encontrado.obtenerInfo());
        } else {
            alert("Disco no encontrado");
        }
    }
}