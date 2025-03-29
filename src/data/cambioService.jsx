// frontend/src/services/cambioService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const fetchCambioData = async () => {
  try {
    const response = await axios.get(`${API_URL}/cambios`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados de câmbio:', error);
    throw error;
  }
};

export const postCambioSelection = async (id) => {
  try {
    const response = await axios.post(`${API_URL}/selecionar-cambio`, { id });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar seleção de câmbio:', error);
    throw error;
  }
};