

function calculadoraIMC(){

    
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

        if (altura <= 0) {
            alert("ALTURA INVALIDA");
            return;
        }
        if (peso <= 0) {
            alert("PESO INVALIDO");
            return;
        }
    let imc = (peso / (altura) **2);
    
    let resultadoIMC = document.getElementById("resultadoIMC");
    let tabla = document.getElementById("tablaMasaCorporal");
    resultadoIMC.innerHTML = "Tu índice de masa corporal es: " + imc.toFixed(2);
if (imc < 16) {
        tabla.innerHTML = "<16.00: Infrapeso (Delgadez severa)"
    } else if (imc >= 16 && imc <= 16.99) { 
        tabla.innerHTML = "16.00 - 16.99: Infrapeso (Delgadez moderada)"
    } else if (imc >= 17 && imc <= 18.49 ) {
        tabla.innerHTML = "17.00 - 18.49: Infrapeso (Delgadez aceptable)"
    } else if (imc >= 18.50 && imc <= 24.99 ) {
        tabla.innerHTML = "18.50 - 24.99: Peso Normal"
    } else if (imc >= 25 && imc <= 29.99 ) {
        tabla.innerHTML = "25.00 - 29.99: Sobrepeso"
    } else if (imc >= 30 && imc <= 34.99 ) {
        tabla.innerHTML = "30.00 - 34.99: Obeso (Tipo I)"
    } else if (imc >= 35 && imc <= 40 ) {
        tabla.innerHTML = "35.00 - 40.00: Obeso (Tipo II)"
    } else {
        tabla.innerHTML = ">40.00: Obeso (Tipo III)"
    }
}



function calculadoraFCM() {

    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    let generoSeleccionado = genero.value;
    let resultadoFCM = document.getElementById("resultadoFCM");
    let zonasFCM = document.getElementById("zonasFCM");

    if (edad < 0 || isNaN(edad) || edad > 100) {
        alert("EDAD INVALIDA")
        return;
    }
    if (generoSeleccionado == "") {
        alert("INSERTA MASC o FEM") 
        return;
    }

    let fcmCalculada;

    if (generoSeleccionado == "Masculino"){
        //tanaka
        fcmCalculada = 208 - (0.73 * edad);
    } else {
        //whaley
        fcmCalculada = 209 - (0.72 * edad);
    }
    
    resultadoFCM.innerHTML = "Tu frecuencia cardíaca máxima estimada es: " + fcmCalculada.toFixed(2);

    let recMin = Math.round(fcmCalculada * 0.60);
    let recMax = Math.round(fcmCalculada * 0.70);

    let aeroMin = Math.round(fcmCalculada * 0.70);
    let aeroMax = Math.round(fcmCalculada * 0.80);

    let anaerMin = Math.round(fcmCalculada * 0.80);
    let anaerMax = Math.round(fcmCalculada * 0.90);

    let rojaMin = Math.round(fcmCalculada * 0.90);
    let rojaMax = Math.round(fcmCalculada * 1.00);


    let htmlZonas = "<h3>Zonas</h3>";
    htmlZonas += "<ul>";

    htmlZonas += "<li>Zona de Recuperación (60%-70%): " + recMin + " - " + recMax + " ppm</li>";
    htmlZonas += "<li>Zona Aeróbica (70%-80%): " + aeroMin + " - " + aeroMax + " ppm</li>";
    htmlZonas += "<li>Zona Anaeróbica (80%-90%): " + anaerMin + " - " + anaerMax + " ppm</li>";
    htmlZonas += "<li>Línea Roja (90%-100%): " + rojaMin + " - " + rojaMax + " ppm</li>";

    htmlZonas += "</ul>";

    zonasFCM.innerHTML = htmlZonas;
}

function categoria() {

    let nacimientoID = document.getElementById("nacimiento").value;
    let horoscopoID = document.getElementById("horoscopo");

    if (nacimientoID > 2025 ||nacimientoID < 1900 || isNaN(nacimientoID)) {
        alert("Inserta un año válido, entre 1900-2025");
        return;
    }

    let animales = ["Rata","Buey","Tigre","Conejo","Dragón","Serpiente","Caballo","Cabra","Mono","Gallo","Perro","Cerdo"];

    /* operacion dada para calcular el animal
    *  indice animal = (año de nacimiento - 4) (mod 12)
    *  cada animal se repite cada 12 años (2000 Dragón - 2012 Dragón)
    *  Cualquier número resulta entre 0 y 11 con el operador Módulo (%)
    *  Operación Desglosada:
    *  Año 2000
    *  (2000 - 4) % 12
    *  1996 % 12
    *  resultado = 4
    */ 
    let indiceAnimal = (nacimientoID - 4) % 12;

    let animalHoroscopo = animales[indiceAnimal];

    horoscopoID.innerHTML = "Tu animal del horoscopo chino es el/la: " + animalHoroscopo;
}

function horarioManana() {
    const diasManana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const horasManana = ["9:00-11:00", "11:00-13:00", "13:00-15:00"];

    let html = "<h2>Horario de Mañana</h2>";
    html += "<table border='1' style='width:100%; text-align:center; margin-bottom:30px;'>";
    html += "<tr><th></th>";

    for (let i = 0; i < diasManana.length; i++) {
        html += "<th>" + diasManana[i] + "</th>";
    }
    html += "</tr>";

    for (let i = 0; i < horasManana.length; i++) {
        html += "<tr>";
        html += "<th>" + horasManana[i] + "</th>";

        for (let j = 0; j < diasManana.length; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("resultadoHorarioManana").innerHTML = html;
}


function horarioTarde() {
    const diasTarde = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const horasTarde = [];

    for (let h = 16; h < 21; h++) {
        horasTarde.push(h + ":00-" + (h + 1) + ":00");
    }

    let html = "<h2>Horario de Tarde</h2>";
    html += "<table border='1' style='width:100%; text-align:center;'>";
    html += "<tr><th></th>";

    for (let i = 0; i < diasTarde.length; i++) {
        html += "<th>" + diasTarde[i] + "</th>";
    }
    html += "</tr>";

    for (let i = 0; i < horasTarde.length; i++) {
        html += "<tr>";
        html += "<th>" + horasTarde[i] + "</th>";

        for (let j = 0; j < diasTarde.length; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("resultadoHorarioTarde").innerHTML = html;
}