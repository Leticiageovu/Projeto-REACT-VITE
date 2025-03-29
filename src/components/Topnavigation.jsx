import React from 'react';
import { Search, Home } from 'lucide-react';

const Topnavigation = () => {
  return (
    <div className="flex items-center justify-between mb-4 bg-gray-200 p-3">
      <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-full">
        L
      </div>
      
      <div className="flex-grow mx-4 bg-white">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Buscar câmbio" 
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        </div>
      </div>
      
      <div className="relative">
        <Home className=" bg-black text-white flex items-center justify-center rounded-full w-9 h-9 " size={10} />
        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          7
        </span>
      </div>
    </div>
  );
};

export default Topnavigation;