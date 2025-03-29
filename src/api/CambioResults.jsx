// frontend/src/components/CambioResults.jsx
import React from 'react';
import { postCambioSelection } from '../data/cambioService';

const CambioResults = ({ data, onSelectionChange }) => {
  const handleSelect = async (id) => {
    try {
      const result = await postCambioSelection(id);
      alert(`Câmbio selecionado: ${result.selecao.tipo} - ${result.selecao.descricao}`);
      if (onSelectionChange) {
        onSelectionChange(result.selecao);
      }
    } catch (error) {
      alert(`Erro ao selecionar câmbio: ${error.response?.data?.mensagem || error.message}`);
    }
  };

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <div className="mt-4 p-4 border rounded bg-gray-50">
        <p className="text-gray-500">Nenhuma opção de câmbio disponível.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <h3 className="font-bold mb-2">Opções de Câmbios Disponíveis:</h3>
      
      {Array.isArray(data) ? (
        <ul className="space-y-2">
          {data.map((item) => (
            <li key={item.id} className="p-3 hover:bg-gray-100 rounded border">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{item.tipo} {item.marchas ? `${item.marchas} marchas` : ''}</div>
                  <p className="text-sm text-gray-600">{item.descricao}</p>
                  <div className="font-semibold text-green-600 mt-1">{item.preco}</div>
                </div>
                <button
                  onClick={() => handleSelect(item.id)}
                  disabled={!item.disponivel}
                  className={`px-4 py-2 rounded ${item.disponivel 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                >
                  {item.disponivel ? 'Selecionar' : 'Indisponível'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <pre className="text-sm overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default CambioResults;