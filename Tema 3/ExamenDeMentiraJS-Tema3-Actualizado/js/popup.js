window.onload = function() {
    const url = "";
    
    const caracteristicas = 'width=300,height=150,scrollbars=no,toolbar=no,location=no,menubar=no,resizable=no';

    const contenidoHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Bienvenida</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    margin: 0;
                    text-align: center;
                }
                button {
                    margin-top: 15px;
                    padding: 8px 15px;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <h3>¡Bienvenido/a a nuestra web!</h3>
            <p>Gracias por visitarnos.</p>
            <button onclick="window.close()">Cerrar</button>
        </body>
        </html>
    `;

    setTimeout(function() {
        const popup = window.open(url, "VentanaBienvenida", caracteristicas);
        
        if (popup) {
            popup.document.write(contenidoHTML);
            popup.document.close();
        } else {
            console.warn("La ventana emergente fue bloqueada por el navegador.");
        }
    }, 10000);
};