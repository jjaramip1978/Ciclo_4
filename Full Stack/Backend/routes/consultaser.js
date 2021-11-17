import express from 'express';
const router = express.Router();

////////// Seccion de Servicios

import Servicio from '../models/servicio';

// Agregar un servicio nuevo.

router.post('/nuevo-servicio', async(req, res)=>{

    const body = req.body;

    console.log(req.params)
    
    try {
        
        const nuevoSer = await Servicio.create(body);
        res.status(200).json(nuevoSer);

    } catch (error){
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }

});


// RECUPERAR INFORMACION DE LA BASE DE DATOS POR MEDIO DE GET

//recuperar solo un documento
router.get('/buscaser/:id', async(req,res)=>{ //el busca yo lo defino
    const _id = req.params.id;
    try{
        const nuevoSer = await Servicio.findOne({_id}); //Servicio es el modelo
        res.json(nuevoSer);
    }catch (error){
        return res.status(400).json({
            mensaje: 'No se encontró el ID',
            error
        })
    }
});

// recuperar todos los documentos

router.get('/buscatodoser',async(req,res)=>{ // El busca yo lo defino
    try{
        const nuevoSer = await Servicio.find();
        res.json(nuevoSer);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'No hay datos',
            error
        })
    }

});

// Borrar un documento

router.delete('/borraser/:id',async(req, res)=>{

    const _id = req.params.id;
    try {

        const nuevoSer = await Servicio.findByIdAndDelete({_id});
        if(!nuevoSer){
            return res.status(400).json({
                mensaje: 'No se encontro el id indicado',
                error
            })
        }
        return res.json(nuevoSer);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se pudo eliminar',
            error
        })        
    }
})

// Para realizar la actualizacion de un documento

router.put('/actualizaser/:id', async(req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const nuevoSer = await Servicio.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(nuevoSer);
      
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ohh, Ocurrio un error !!!',
            error
        })      
    }
});
module.exports = router;