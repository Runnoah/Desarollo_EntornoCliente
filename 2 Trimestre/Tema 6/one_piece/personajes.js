function generarPersonaje() {
    let eleccion = prompt("¿Qué personaje quieres? 1. Sanji, 2. Zoro, 3. Nami, 4. Luffy");
    let contenedor = document.getElementById("contenedor-fotos");
    let nuevaImagen = document.createElement("img");

    //meterle los estilos
    nuevaImagen.classList.add("img-estilizada");

    switch (eleccion) {
        case "1":
            nuevaImagen.src = "img_onepiece/sanji.jpg";
            nuevaImagen.classList.add("tipo-sanji");
            contenedor.appendChild(nuevaImagen);
            break;
        case "2":
            nuevaImagen.src = "img_onepiece/zoro.jpg";
            nuevaImagen.classList.add("tipo-zoro");
            contenedor.appendChild(nuevaImagen);
            break;
        case "3":
            nuevaImagen.src = "img_onepiece/nami.jpg";
            nuevaImagen.classList.add("tipo-nami");
            contenedor.appendChild(nuevaImagen);
            break;
        case "4":
            nuevaImagen.src = "img_onepiece/luffy.jpg";
            nuevaImagen.classList.add("tipo-luffy");
            contenedor.appendChild(nuevaImagen);
            break;
        default:
            alert("Opción no válida");
            break;
    }
}

function borrarPersonaje() {
    let contenedor = document.getElementById("contenedor-fotos");
    
    if (contenedor.lastElementChild) {
        contenedor.removeChild(contenedor.lastElementChild);
    }
    
    document.getElementById("resultado").innerHTML = "";
}

function contarSanji() {
    let cantidad = document.querySelectorAll(".tipo-sanji").length;
    document.getElementById("resultado").innerHTML = "Total de fotos de Sanji: " + cantidad;
}

function contarZoro() {
    let cantidad = document.querySelectorAll(".tipo-zoro").length;
    document.getElementById("resultado").innerHTML = "Total de fotos de Zoro: " + cantidad;
}

function contarNami() {
    let cantidad = document.querySelectorAll(".tipo-nami").length;
    document.getElementById("resultado").innerHTML = "Total de fotos de Nami: " + cantidad;
}

function contarLuffy() {
    let cantidad = document.querySelectorAll(".tipo-luffy").length;
    document.getElementById("resultado").innerHTML = "Total de fotos de Luffy: " + cantidad;
}

