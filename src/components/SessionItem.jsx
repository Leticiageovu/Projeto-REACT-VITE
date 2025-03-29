import React from 'react';
import {  } from 'lucide-react'
const SessionItem = ({ session }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 flex items-center">
      <div className="flex-grow">
        <div className="font-bold"> OPÇÃO {session.id}</div>
        <div className="text-sm text-gray-600">{session.cooperative}</div>
        <div className="text-sm text-gray-600">{session.date}  <br /> {session.location}</div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="bg-black text-white rounded-lg px-2 py-1">
          {session.samples}
        </div>
        < div className="bg-gray-500 text-white rounded-lg w-8 h-8 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.12-5.658a2.121 2.121 0 113 3 2.121 2.121 0 01-3-3z" />
          </svg>
        </div>
        {session.status === 'EXPERIMENTE AGORA' ? (
          <button className="bg-black text-white px-3 py-2 rounded-lg">
            
            EXPERIMENTE AGORA
          </button>
        ) : (
          <div className="text-gray-400 px-3 py-2">
            <button className="bg-gray-300 text-white px-3 py-2 rounded-lg">
            TESTE FINALIZADO
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionItem;
