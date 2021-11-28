const {Router} = require('express');

const router = Router();
const servicioController = require('../controllers/serviciosController');

// Agregar un servicio nuevo
router.post('/nuevoServicio', servicioController.nuevoServicio);
//recuperar solo un documento
router.get('/buscarServicio/:id', servicioController.buscarServicio);
// recuperar todos los documentos
router.get('/listarServicio', servicioController.listarServicio);
// Borrar un documento
router.delete('/borrarServicio/:id', servicioController.borrarServicio);
// Para realizar la actualizacion de un documento
router.put('/actualizarServicio/:id', servicioController.actualizarServicio);

module.exports = router;