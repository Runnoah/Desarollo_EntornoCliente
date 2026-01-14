function crearCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    let expiracion = "expires=" + fecha.toUTCString();
    
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function leerCookie(nombre) {
    let nombreIgual = nombre + "=";
    let listaCookies = document.cookie.split(';');

    for(let i = 0; i < listaCookies.length; i++) {
        let c = listaCookies[i];
        
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(nombreIgual) == 0) {
            return c.substring(nombreIgual.length, c.length);
        }
    }
    return ""; 
}

function borrarCookie(nombre) {
    crearCookie(nombre, "", -1);
}