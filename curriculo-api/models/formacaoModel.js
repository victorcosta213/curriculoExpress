const pool = require('./db');

const Formacao = {
  findAll: () => pool.query('SELECT * FROM formacao'),
  findById: (id) => pool.query('SELECT * FROM formacao WHERE id = $1', [id]),
  create: (data) =>
    pool.query(
      'INSERT INTO formacao (instituicao, curso, data_conclusao) VALUES ($1, $2, $3) RETURNING *',
      [data.instituicao, data.curso, data.data_conclusao]
    ),
  update: (id, data) =>
    pool.query(
      'UPDATE formacao SET instituicao = $1, curso = $2, data_conclusao = $3 WHERE id = $4 RETURNING *',
      [data.instituicao, data.curso, data.data_conclusao, id]
    ),
  delete: (id) => pool.query('DELETE FROM formacao WHERE id = $1', [id]),
};

module.exports = Formacao;
