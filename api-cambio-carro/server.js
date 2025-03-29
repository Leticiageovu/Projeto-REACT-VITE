// server.js - Arquivo principal do servidor
const express = require('express');
const cors = require('cors');
const cambioRoutes = require('./routes/cambioRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para processar JSON
app.use(express.json());

// Configurar CORS para permitir requisições do seu frontend
app.use(cors({
  origin: '*', // Permite qualquer origem durante desenvolvimento
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Usar as rotas de câmbio
app.use('/api', cambioRoutes);

// Rota básica para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.send('API de Câmbio para Carros - Servidor funcionando!');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    mensagem: 'Erro interno no servidor',
    erro: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`API disponível em http://localhost:${PORT}/api/cambios`);
});