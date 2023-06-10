const express = require('express');
const router = express.Router();

const proyectoController = require('../controller/proyectoController')

router.post('/', proyectoController.crearEvento);
router.get('/', proyectoController.obtenerEventos);
router.get('/:id', proyectoController.obtenerUnEvento);
router.put('/:id', proyectoController.modificarEvento);
router.delete('/:id', proyectoController.eliminarEvento);

module.exports = router;

