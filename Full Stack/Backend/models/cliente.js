const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const clienteSchema = new Schema({

    //documento:{type:String, required:[true, 'Documento obligatorio']},
    nombre:{type:String, required:[true, 'Nombre Requerido']},
    email:{type:String, required:[true, 'Correo Obligatorio']},
    celular:{type:String, required:[true, 'Correo Obligatorio']},
    ciudad:{type:String, required:[true, 'Correo Obligatorio']},
    empresa:{type:String, requiered:[true, 'Valor requerido']},
    fechaRegistro:{type:Date, default:Date.now}
})

// Convertir a modelo

const Cliente = mongoose.model('Cliente',clienteSchema);

module.exports = Cliente;