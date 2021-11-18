import mongoose from "mongoose";
const Schema = mongoose.Schema;

const servicioSchema = new Schema({

    codigo:{type:String, required:[true, 'Codigo obligatorio']},
    correo:{type:String, required:[true, 'Correo Requerido']},    
    habilidad:{type:String, required:[true, 'Habilidad Obligatoria']},
    descripcion:{type:String, required:[true, 'Obligatorio']},
    valor:String
})

// Convertir a modelo

const Servicio = mongoose.model('Servicio',servicioSchema);

export default Servicio;