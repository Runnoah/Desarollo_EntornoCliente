function horarioManana() {
    const diasManana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const horasManana = ["9:00-11:00", "11:00-13:00", "13:00-15:00"];

    let html = "<h2>Horario de Mañana</h2>";
    html += "<table border='1' style='width:100%; text-align:center; margin-bottom:30px;'>";
    html += "<tr><th></th>";

    for (let i = 0; i < diasManana.length; i++) {
        html += "<th>" + diasManana[i] + "</th>";
    }
    html += "</tr>";

    for (let i = 0; i < horasManana.length; i++) {
        html += "<tr>";
        html += "<th>" + horasManana[i] + "</th>";

        for (let j = 0; j < diasManana.length; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("resultadoHorarioManana").innerHTML = html;
}


function horarioTarde() {
    const diasTarde = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const horasTarde = [];

    for (let h = 16; h < 21; h++) {
        horasTarde.push(h + ":00-" + (h + 1) + ":00");
    }

    let html = "<h2>Horario de Tarde</h2>";
    html += "<table border='1' style='width:100%; text-align:center;'>";
    html += "<tr><th></th>";

    for (let i = 0; i < diasTarde.length; i++) {
        html += "<th>" + diasTarde[i] + "</th>";
    }
    html += "</tr>";

    for (let i = 0; i < horasTarde.length; i++) {
        html += "<tr>";
        html += "<th>" + horasTarde[i] + "</th>";

        for (let j = 0; j < diasTarde.length; j++) {
            html += "<td></td>";
        }
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("resultadoHorarioTarde").innerHTML = html;
}