// controllers/cambioController.js - Controladores para as operações de câmbio
const cambioService = require('../services/cambioService');

// Controlador para buscar todas as opções de câmbio
exports.getAllCambios = (req, res) => {
  try {
    // Simular um pequeno atraso para mostrar o loading no frontend
    setTimeout(() => {
      const opcoes = cambioService.getAllCambios();
      res.json(opcoes);
    }, 800);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar opções de câmbio', erro: error.message });
  }
};

// Controlador para buscar uma opção específica de câmbio por ID
exports.getCambioById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const opcao = cambioService.getCambioById(id);
    
    if (!opcao) {
      return res.status(404).json({ mensagem: 'Opção de câmbio não encontrada' });
    }
    
    res.json(opcao);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar opção de câmbio', erro: error.message });
  }
};

// Controlador para selecionar um câmbio
exports.selecionarCambio = (req, res) => {
  try {
    const { id } = req.body;
    
    if (!id) {
      return res.status(400).json({ mensagem: 'ID do câmbio é obrigatório' });
    }
    
    const resultado = cambioService.selecionarCambio(id);
    
    if (resultado.error) {
      return res.status(resultado.status || 400).json({ mensagem: resultado.error });
    }
    
    res.status(201).json({
      mensagem: 'Câmbio selecionado com sucesso',
      selecao: resultado.selecao
    });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao selecionar câmbio', erro: error.message });
  }
};