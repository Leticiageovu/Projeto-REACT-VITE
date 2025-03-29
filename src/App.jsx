import React, { useState } from 'react';
import Topnavigation from './components/Topnavigation';
import SessionItem from './components/SessionItem';
import { initialSessions } from './data/sessions';
import CambioCarroButton from './api/CambioCarroButton';

function App() {
  const [sessions] = useState(initialSessions);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4">
      <Topnavigation />
       
      <div className="max-w-md mx-auto p-4">

      <CambioCarroButton />
      
    </div>

      {sessions.map((session) => (
        <SessionItem 
          key={session.id} 
          session={session} 
        />
      ))}
    </div>
  );
}

export default App;