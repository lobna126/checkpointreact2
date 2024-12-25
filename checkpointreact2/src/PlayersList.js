

import React from 'react';
import Player from './player';  
import players from './players'; 


const PlayersList = () => {
  return (
    <div className="players-list">
      {players.map((player, index) => (
       
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayersList;
