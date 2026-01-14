

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
