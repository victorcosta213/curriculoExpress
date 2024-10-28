const DadosPessoais = require('../models/dadosPessoaisModel');

exports.getAll = async (req, res) => {
  const result = await DadosPessoais.findAll();
  res.json(result.rows);
};

exports.getById = async (req, res) => {
  const result = await DadosPessoais.findById(req.params.id);
  res.json(result.rows[0]);
};

exports.create = async (req, res) => {
  const result = await DadosPessoais.create(req.body);
  res.status(201).json(result.rows[0]);
};

exports.update = async (req, res) => {
  const result = await DadosPessoais.update(req.params.id, req.body);
  res.json(result.rows[0]);
};

exports.delete = async (req, res) => {
  await DadosPessoais.delete(req.params.id);
  res.status(204).send();
};
