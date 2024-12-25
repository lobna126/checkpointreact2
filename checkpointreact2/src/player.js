

import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="player-card">
      <img src={imageUrl} alt={name} className="player-image" />
      <div className="player-info">
        <h2 className="player-name">{name}</h2>
        <p className="player-team">{team}</p>
        <p className="player-nationality">Nationality: {nationality}</p>
        <p className="player-jersey-number">Jersey Number: {jerseyNumber}</p>
        <p className="player-age">Age: {age}</p>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: "N/A",
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150",
};

export default Player;
