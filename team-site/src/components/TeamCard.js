import React, { useState } from 'react';
import './TeamCard.css';

function TeamCard({ image, name, title, note }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`team-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={name} className="profile-pic" />
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
        <div className="card-back">
          <p>{note}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;