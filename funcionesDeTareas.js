const fs = require('fs')

let funcionesDeTareas = {
    leerJson: function () {
        let tareasJson = fs.readFileSync('./tareas.json', 'utf-8') 
        let tareasParseadas = JSON.parse(tareasJson);
        return tareasParseadas;  
    },
    agregarTarea: function (titulo, estado) {
        let nuevaTarea = {
            titulo: titulo,
            estado: estado,
        }
        let tareasAnteriores = this.leerJson()

        tareasAnteriores.push(nuevaTarea)

        let nuevoJson = JSON.stringify(tareasAnteriores)

        fs.writeFileSync('./tareas.json', nuevoJson, 'utf-8')
    }
}
module.exports = funcionesDeTareas;