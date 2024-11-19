const Formacao = require('../models/formacaoModel');

exports.getAll = async (req, res) => {
  const result = await Formacao.findAll();
  res.json(result.rows);
};

exports.getById = async (req, res) => {
  const result = await Formacao.findById(req.params.id);
  res.json(result.rows[0]);
};

exports.create = async (req, res) => {
  const result = await Formacao.create(req.body);
  res.status(201).json(result.rows[0]);
};

exports.update = async (req, res) => {
  const result = await Formacao.update(req.params.id, req.body);
  res.json(result.rows[0]);
};

exports.delete = async (req, res) => {
  await Formacao.delete(req.params.id);
  res.status(204).send();
};
