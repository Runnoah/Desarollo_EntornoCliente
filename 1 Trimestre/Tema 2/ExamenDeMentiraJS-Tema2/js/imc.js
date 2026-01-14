

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