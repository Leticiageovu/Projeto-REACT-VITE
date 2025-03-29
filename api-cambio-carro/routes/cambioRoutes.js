// routes/cambioRoutes.js - Rotas relacionadas a câmbios
const express = require('express');
const router = express.Router();
const cambioController = require('../controllers/cambiocontroller');

// Rota para buscar todas as opções de câmbio
router.get('/cambios', cambioController.getAllCambios);

// Rota para buscar uma opção específica de câmbio por ID
router.get('/cambios/:id', cambioController.getCambioById);

// Rota para selecionar um câmbio
router.post('/selecionar-cambio', cambioController.selecionarCambio);

module.exports = router;