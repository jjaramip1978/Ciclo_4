const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const clienteSchema = new Schema({

    //documento:{type:String, required:[true, 'Documento obligatorio']},
    email:{unique: [true, 'Email is already in use'], type:String, required:[true, 'Email Requerido']},
    nombre:{type:String, required:[true, 'Nombre Requerido']},
    celular:{type:String, required:[true, 'Correo Obligatorio']},
    ciudad:{type:String, required:[true, 'Correo Obligatorio']},
    empresa:{type:String, requiered:[true, 'Valor requerido']},
    fechaRegistro:{type:Date, default:Date.now}
})

// Convertir a modelo

const Cliente = mongoose.model('Cliente',clienteSchema);

module.exports = Cliente;