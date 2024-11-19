const pool = require('./db');

const DadosPessoais = {
  findAll: () => pool.query('SELECT * FROM dados_pessoais'),
  findById: (id) => pool.query('SELECT * FROM dados_pessoais WHERE id = $1', [id]),
  create: (data) =>
    pool.query(
      'INSERT INTO dados_pessoais (nome, email, telefone, endereco) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.nome, data.email, data.telefone, data.endereco]
    ),
  update: (id, data) =>
    pool.query(
      'UPDATE dados_pessoais SET nome = $1, email = $2, telefone = $3, endereco = $4 WHERE id = $5 RETURNING *',
      [data.nome, data.email, data.telefone, data.endereco, id]
    ),
  delete: (id) => pool.query('DELETE FROM dados_pessoais WHERE id = $1', [id]),
};

module.exports = DadosPessoais;
