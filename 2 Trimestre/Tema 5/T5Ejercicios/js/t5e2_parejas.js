let imagenes = [
    "../imagenes/homer.png", "../imagenes/homer.png",
    "../imagenes/marge.png", "../imagenes/marge.png",
    "../imagenes/bart.png", "../imagenes/bart.png",
    "../imagenes/lisa.png", "../imagenes/lisa.png",
    "../imagenes/maggie.png", "../imagenes/maggie.png",
    "../imagenes/krusty.png", "../imagenes/krusty.png"
];

let carta1 = null;
let carta2 = null;
let bloqueo = false;
let aciertos = 0;

window.onload = function() {
    iniciarTablero();
};

function iniciarTablero() {
    imagenes.sort(function() { return Math.random() - 0.5 });

    for (let i = 0; i < 12; i++) {
        let imagenDOM = document.getElementById("img" + i);
        imagenDOM.src = imagenes[i];
    }
}

function girarCarta(celda) {
    let imagenInterior = celda.querySelector("img");

    if (bloqueo == true) return;
    if (imagenInterior.style.display === "block") return;

    imagenInterior.style.display = "block";

    if (carta1 == null) {
        carta1 = celda;
    } else {
        carta2 = celda;
        comprobarPareja();
    }
}

function comprobarPareja() {
    let img1 = carta1.querySelector("img").src;
    let img2 = carta2.querySelector("img").src;

    if (img1 === img2) {
        carta1.style.backgroundColor = "lightgreen";
        carta2.style.backgroundColor = "lightgreen";

        sumarPunto();

        carta1 = null;
        carta2 = null;
    } else {
        bloqueo = true;

        setTimeout(function() {
            carta1.querySelector("img").style.display = "none";
            carta2.querySelector("img").style.display = "none";

            carta1 = null;
            carta2 = null;
            bloqueo = false;
        }, 1000);
    }
}

function sumarPunto() {
    let inputPuntos = document.getElementById("puntuacion");
    let valorActual = parseInt(inputPuntos.value);
    inputPuntos.value = valorActual + 1;
    aciertos++;

    if (aciertos === 6) {
        setTimeout(function() {
            alert("¡Los has encontrado todos!");
        }, 500);
    }
}