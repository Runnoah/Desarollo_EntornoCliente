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