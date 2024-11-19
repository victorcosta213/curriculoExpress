const express = require('express');
const formacaoController = require('../controllers/formacaoController');
const router = express.Router();

router.get('/', formacaoController.getAll);
router.get('/:id', formacaoController.getById);
router.post('/', formacaoController.create);
router.put('/:id', formacaoController.update);
router.delete('/:id', formacaoController.delete);

module.exports = router;
