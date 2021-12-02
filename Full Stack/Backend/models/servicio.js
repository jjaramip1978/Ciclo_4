const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const servicioSchema = new Schema({

    habilidad:{type:String, required:[true, 'Habilidad Obligatoria']},
    correo:{type:String, required:[true, 'Correo Requerido']},    
    descripcion:{type:String, required:[true, 'Obligatorio']},
    valor:String
})

// Convertir a modelo
const Servicio = mongoose.model('Servicio',servicioSchema);

module.exports = Servicio;