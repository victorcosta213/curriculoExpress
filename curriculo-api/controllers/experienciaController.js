const Experiencia = require('../models/experienciaModel');

exports.getAll = async (req, res) => {
  const result = await Experiencia.findAll();
  res.json(result.rows);
};

exports.getById = async (req, res) => {
  const result = await Experiencia.findById(req.params.id);
  res.json(result.rows[0]);
};

exports.create = async (req, res) => {
  const result = await Experiencia.create(req.body);
  res.status(201).json(result.rows[0]);
};

exports.update = async (req, res) => {
  const result = await Experiencia.update(req.params.id, req.body);
  res.json(result.rows[0]);
};

exports.delete = async (req, res) => {
  await Experiencia.delete(req.params.id);
  res.status(204).send();
};
