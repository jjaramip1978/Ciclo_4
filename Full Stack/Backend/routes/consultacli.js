const express = require('express');
const {Router} = require('express');

const router = Router();
const clienteController = require('../controllers/clienteController');


// Agregar un cliente.
router.post('/nuevoCliente', clienteController.nuevoCliente);
//recuperar solo un documento
router.get('/buscarCliente/:id', clienteController.buscarCliente);
// recuperar todos los documentos
router.get('/listarClientes', clienteController.listarClientes);
// Borrar un documento
router.delete('/eliminarCliente/:id', clienteController.eliminarCliente);
// Actualizar un cliente
router.put('/actualizarCliente/:id', clienteController.actualizarCliente);

module.exports = router;