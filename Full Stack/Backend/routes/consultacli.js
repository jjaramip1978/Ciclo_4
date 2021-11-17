import express from 'express';
const router = express.Router();

//////////////////////////

import Cliente from '../models/cliente';

// Agregar un cliente.

router.post('/nuevo-cliente', async(req, res)=>{

    const body = req.body;
    
    try {
        
        const nuevoCli = await Cliente.create(body);
        res.status(200).json(nuevoCli);

    } catch (error){
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }

});

// RECUPERAR INFORMACION DE LA BASE DE DATOS POR MEDIO DE GET

//recuperar solo un documento
router.get('/buscacli/:id', async(req,res)=>{ //el busca yo lo defino
    const _id = req.params.id;
    try{
        const nuevoCli = await Cliente.findOne({_id}); //Cliente es el modelo
        res.json(nuevoCli);
    }catch (error){
        return res.status(400).json({
            mensaje: 'No se encontró el ID',
            error
        })
    }
});

// recuperar todos los documentos

router.get('/buscatodocli',async(req,res)=>{ // El busca yo lo defino
    try{
        const nuevoCli = await Cliente.find();
        res.json(nuevoCli);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'No hay datos',
            error
        })
    }

});

// Borrar un documento

router.delete('/borracli/:id',async(req, res)=>{

    const _id = req.params.id;
    try {

        const nuevoCli = await Cliente.findByIdAndDelete({_id});
        if(!nuevoCli){
            return res.status(400).json({
                mensaje: 'No se encontro el id indicado',
                error
            })
        }
        return res.json(nuevoCli);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se pudo eliminar',
            error
        })        
    }
})

// Para realizar la actualizacion de un documento

router.put('/actualizacli/:id', async(req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const nuevoCli = await Cliente.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(nuevoCli);
      
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ohh, Ocurrio un error !!!',
            error
        })      
    }
});

module.exports = router;