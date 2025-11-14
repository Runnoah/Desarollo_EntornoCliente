
let divFecha = document.getElementById("fechaActual");
let fechaHoy = new Date();

let dia = fechaHoy.getDate();
let mes = fechaHoy.getMonth() + 1;
let año = fechaHoy.getFullYear();

let fechaPuesta = dia + "/" + mes + "/" + año;

divFecha.innerHTML = fechaPuesta;