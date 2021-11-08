import express from 'express';
const router = express.Router();

import Profesion from '../models/profesional';

// Agregar un profesional.

router.post('/nuevo-profesional', async(req, res)=>{

    const body = req.body;
    
    try {
        
        const nuevoPr = await Profesion.create(body);
        res.status(200).json(nuevoPr);

    } catch (error){
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }

});

// RECUPERAR INFORMACION DE LA BASE DE DATOS POR MEDIO DE GET

//recuperar solo un documento
router.get('/busca/:id', async(req,res)=>{ //el busca yo lo defino
    const _id = req.params.id;
    try{
        const nuevoPr = await Profesion.findOne({_id}); //Profesion es el modelo
        res.json(nuevoPr);
    }catch (error){
        return res.status(400).json({
            mensaje: 'No se encontró el ID',
            error
        })
    }
});

// recuperar todos los documentos

router.get('/busca',async(req,res)=>{ // El busca yo lo defino
    try{
        const nuevoPr = await Profesion.find();
        res.json(nuevoPr);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'No hay datos',
            error
        })
    }

});

// Borrar un documento

router.delete('/borra/:id',async(req, res)=>{

    const _id = req.params.id;
    try {

        const nuevoPr = await Profesion.findByIdAndDelete({_id});
        if(!nuevoPr){
            return res.status(400).json({
                mensaje: 'No se encontro el id indicado',
                error
            })
        }
        return res.json(nuevoPr);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se pudo eliminar',
            error
        })        
    }
})

// Para realizar la actualizacion de un documento

router.put('/actualiza/:id', async(req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const nuevoPr = await Profesion.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(nuevoPr);
      
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ohh, Ocurrio un error !!!',
            error
        })      
    }
});

module.exports = router;