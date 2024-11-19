const pool = require('./db');

const Experiencia = {
  findAll: () => pool.query('SELECT * FROM experiencia'),
  findById: (id) => pool.query('SELECT * FROM experiencia WHERE id = $1', [id]),
  create: (data) =>
    pool.query(
      'INSERT INTO experiencia (cargo, empresa, data_inicio, data_fim, responsabilidades) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [data.cargo, data.empresa, data.data_inicio, data.data_fim, data.responsabilidades]
    ),
  update: (id, data) =>
    pool.query(
      'UPDATE experiencia SET cargo = $1, empresa = $2, data_inicio = $3, data_fim = $4, responsabilidades = $5 WHERE id = $6 RETURNING *',
      [data.cargo, data.empresa, data.data_inicio, data.data_fim, data.responsabilidades, id]
    ),
  delete: (id) => pool.query('DELETE FROM experiencia WHERE id = $1', [id]),
};

module.exports = Experiencia;
