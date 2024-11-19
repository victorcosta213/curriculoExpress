require('dotenv').config();
const express = require('express');
const app = express();
const experienciaRoutes = require('./routes/experienciaRoutes');
const formacaoRoutes = require('./routes/formacaoRoutes');
const dadosPessoaisRoutes = require('./routes/dadosPessoaisRoutes');


app.use(express.json());
app.use('/dados-pessoais', dadosPessoaisRoutes);
app.use('/experiencia', experienciaRoutes);
app.use('/formacao', formacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
