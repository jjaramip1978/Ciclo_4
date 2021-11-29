const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const profesionalSchema = new Schema({

    nombre:{type:String, required:[true, 'Nombre Requerido']},
    email:{type:String, required:[true, 'Email Obligatorio']},
    ciudad:{type:String, required:[true, 'Ciudad Obligatoria']},
    celular:{type:String, required:[true, 'Celular Obligatorio']},
    profesion:{type:String, requiered:[true, 'Profesion requerida']},
    habilidad:{type:String, requiered:[true, 'Habilidad requerida']},
    descripcion:{type:String, requiered:[true, 'Descripcion requerida']},
    valor:{type:String, requiered:[true, 'Valor requerido']},
    fechaRegistro:{type:Date, default:Date.now}
})

// Convertir a modelo

const Profesion = mongoose.model('Profesion',profesionalSchema);

module.exports = Profesion;