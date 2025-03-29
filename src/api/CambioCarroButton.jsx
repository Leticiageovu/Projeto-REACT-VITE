// frontend/src/components/CambioCarroButton.jsx
import React, { useState } from 'react';
import { fetchCambioData } from '../data/cambioService';
import LoadingSpinner from './LoadingSpinner';
import CambioResults from './CambioResults';

const CambioCarroButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCambio, setSelectedCambio] = useState(null);

  const handleFetchCambio = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await fetchCambioData();
      setData(result);
      console.log('Dados obtidos com sucesso:', result);
    } catch (err) {
      setError('Erro ao buscar informações de câmbio: ' + err.message);
      console.error('Erro na requisição:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {selectedCambio ? (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-medium text-green-800">Câmbio Selecionado</h3>
          <p className="text-green-700">{selectedCambio.tipo} - {selectedCambio.descricao}</p>
          <p className="font-bold text-green-700">{selectedCambio.preco}</p>
          <button 
            onClick={() => setSelectedCambio(null)} 
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            Alterar seleção
          </button>
        </div>
      ) : (
        <button
          onClick={handleFetchCambio}
          className="w-full bg-black text-yellow-400 font-bold py-3 px-4 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <span className="inline-block mr-2">🚗</span>
          )}
          {isLoading ? "CARREGANDO..." : "ESCOLHA O CÂMBIO DO SEU CARRO"}
        </button>
      )}
      
      {error && (
        <div className="mt-2 text-red-500 text-sm">{error}</div>
      )}
      
      {data && !error && !selectedCambio && (
        <CambioResults 
          data={data} 
          onSelectionChange={setSelectedCambio}
        />
      )}
    </div>
  );
};

export default CambioCarroButton;