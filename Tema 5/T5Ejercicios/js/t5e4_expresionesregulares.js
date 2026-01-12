window.onload = function() {
    let valorGuardado = leerCookie("errores");
    
    if (valorGuardado == "") {
        document.getElementById("intentos").value = "0";
    } else {
        document.getElementById("intentos").value = valorGuardado;
    }
};


function reiniciarContador() {
    borrarCookie("errores");
    document.getElementById("intentos").value = "0";
    alert("Contador reiniciado a 0.");
}

function sumarError() {
    let actual = leerCookie("errores");
    
    let numero = 0;
    if (actual != "") {
        numero = parseInt(actual);
    }

    numero = numero + 1;

    crearCookie("errores", numero, 30);

    document.getElementById("intentos").value = numero;
}

function marcarInput(elemento, valido) {
    if (valido == true) {
        elemento.style.border = "1px solid black";
        elemento.style.color = "black";
    } else {
        elemento.style.border = "2px solid red";
        elemento.style.color = "red";
    }
}

function validarFormulario() {
    let fecha = document.getElementById("fecha");
    let cocinero = document.getElementById("cocinero");
    let destinatario = document.getElementById("destinatario");
    let gramos = document.getElementById("gramos");
    let composicion = document.getElementById("composicion");
    let cuenta = document.getElementById("cuenta");
    let cuentaLimpia = document.getElementById("cuentaLimpia");

    cuentaLimpia.value = "";
    
    let errores = false;

    let regFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regFecha.test(fecha.value) == false) {
        marcarInput(fecha, false);
        errores = true;
    } else {
        marcarInput(fecha, true);
    }

    let regCocinero = /^[A-Z]{2}\$\d{4}$/;
    if (regCocinero.test(cocinero.value) == false) {
        marcarInput(cocinero, false);
        errores = true;
    } else {
        marcarInput(cocinero, true);
    }

    let regDestinatario = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;
    if (regDestinatario.test(destinatario.value) == false) {
        marcarInput(destinatario, false);
        errores = true;
    } else {
        marcarInput(destinatario, true);
    }

    let valorGramos = parseInt(gramos.value);
    if (gramos.value == "" || valorGramos < 100 || valorGramos > 5000) {
        marcarInput(gramos, false);
        errores = true;
    } else {
        marcarInput(gramos, true);
    }

    let regComposicion = /^\d+g[A-Za-z]{1,2}\d*[A-Za-z]{1,2}\d*$/;
    if (regComposicion.test(composicion.value) == false) {
        marcarInput(composicion, false);
        errores = true;
    } else {
        marcarInput(composicion, true);
    }

    if (validarCuenta(cuenta.value) == false) {
        marcarInput(cuenta, false);
        errores = true;
    } else {
        marcarInput(cuenta, true);
        cuentaLimpia.value = cuenta.value.replace(/-/g, "");
    }

    if (errores == false) {
        alert("Todo correcto. Bolsa validada.");
    } else {
        sumarError();
        alert("Hay errores en el formulario.");
    }
}

function validarCuenta(texto) {
    let formato = /^[A-Z]{2}\d{2}-\d{12}-\d{2}$/;
    
    if (formato.test(texto) == false) { return false; }

    let parteLetras = texto.substring(0, 2);
    let parteSuma = parseInt(texto.substring(2, 4));
    let parteNumeros = texto.substring(5, 17);
    let parteControl = texto.substring(18, 20);

    let letra1 = parteLetras.charCodeAt(0) - 64; 
    let letra2 = parteLetras.charCodeAt(1) - 64;
    
    if ((letra1 + letra2) != parteSuma) { return false; }

    let bloque1 = parteNumeros.substring(0, 6);
    let bloque2 = parteNumeros.substring(6, 12);

    let suma1 = 0;
    for(let i=0; i<6; i++) {
        suma1 = suma1 + parseInt(bloque1.charAt(i));
    }

    let suma2 = 0;
    for(let i=0; i<6; i++) {
        suma2 = suma2 + parseInt(bloque2.charAt(i));
    }

    let controlCalculado1 = parseInt(suma1 / 6);
    let controlCalculado2 = parseInt(suma2 / 6);

    let controlReal1 = parseInt(parteControl.charAt(0));
    let controlReal2 = parseInt(parteControl.charAt(1));

    if (controlCalculado1 == controlReal1 && controlCalculado2 == controlReal2) {
        return true;
    } else {
        return false;
    }
}