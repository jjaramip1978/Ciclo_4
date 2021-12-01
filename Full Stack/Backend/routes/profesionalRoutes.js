const {Router} = require('express');

const router = Router();
const profesionalController = require('../controllers/profesionalController')

// Agregar un profesional.
router.post('/nuevoProfesional', profesionalController.nuevoProfesional);
//recuperar solo un documento
router.get('/buscarProfesional/:id', profesionalController.buscarProfesional);
//recuperar solo un documento por email
router.get('/buscarProfesional/:email', profesionalController.buscarProfesionalEmail);
// recuperar todos los documentos
router.get('/listarProfesionales', profesionalController.listarProfesionales);
// Borrar un documento
router.delete('/eliminarProfesional/:id', profesionalController.eliminarProfesional);
// Para realizar la actualizacion de un documento
router.put('/actualizarProfesional/:id', profesionalController.actualizarProfesional);

module.exports = router;