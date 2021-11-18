import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profesionalSchema = new Schema({

    documento:{type:String, required:[true, 'Documento obligatorio']},
    nombre:{type:String, required:[true, 'Nombre Requerido']},
    correo:{type:String, required:[true, 'Correo Obligatorio']},
    telefono:String,
    profesion:{type:String, requiered:[true, 'Profesion requerida']},
    ciudad:String,
    fechaRegistro:{type:Date, default:Date.now}
})

// Convertir a modelo

const Profesion = mongoose.model('Profesion',profesionalSchema);

export default Profesion;