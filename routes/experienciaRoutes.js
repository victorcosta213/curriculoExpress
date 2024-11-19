const express = require('express');
const experienciaController = require('../controllers/experienciaController');
const router = express.Router();

router.get('/', experienciaController.getAll);
router.get('/:id', experienciaController.getById);
router.post('/', experienciaController.create);
router.put('/:id', experienciaController.update);
router.delete('/:id', experienciaController.delete);

module.exports = router;
