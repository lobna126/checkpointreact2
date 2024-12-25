

import React from 'react';
import './App.css';
import PlayersList from './PlayersList';  

function App() {
  return (
    <div className="App">
      <h1>Player's Information</h1>
      <PlayersList />  {/* On affiche la liste des joueurs */}
    </div>
  );
}

export default App;


