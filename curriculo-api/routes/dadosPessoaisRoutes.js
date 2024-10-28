const express = require('express');
const dadosPessoaisController = require('../controllers/dadosPessoaisController');
const router = express.Router();

router.get('/', dadosPessoaisController.getAll);
router.get('/:id', dadosPessoaisController.getById);
router.post('/', dadosPessoaisController.create);
router.put('/:id', dadosPessoaisController.update);
router.delete('/:id', dadosPessoaisController.delete);

module.exports = router;
