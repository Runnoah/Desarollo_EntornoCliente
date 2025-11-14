function generarContraseña() {
                    
                    let contraseña = document.getElementById("contraseñaUsuario").value;
                    let resultadoContraseña = document.getElementById("resultadoContraseña");

                    if (contraseña.length < 8) {
                        resultadoContraseña.innerHTML = "Contraseña no segura (Menor a 8 carácteres)";
                        return;
                    }
                    
                    if (contraseña.length > 16) {
                        resultadoContraseña.innerHTML = "Contraseña no segura (Mayor a 16 carácteres)";
                        return;
                    } 
                    
                    let minusculas = (contraseña === contraseña.toLowerCase());
                    let mayusculas = (contraseña === contraseña.toUpperCase());

                    if (minusculas || mayusculas) {
                        resultadoContraseña.innerHTML = "Contraseña no segura (Minus y Mayus).";
                        return;
                    }
                    
                    let validacionNumerica = /\d/;

                    if (!validacionNumerica.test(contraseña)) {
                        resultadoContraseña.innerHTML = "Contraseña no segura (Número).";
                        return;
                    } 
                    
                    let validacion = /[-_@#$%&]/;

                    if (!validacion.test(contraseña)) {
                        resultadoContraseña.innerHTML = "Contraseña no segura (Falta un símbolo: -, _, @, #, $, %, &).";
                        return;
                    }

                    resultadoContraseña.innerHTML = "Contraseña segura.";
                }