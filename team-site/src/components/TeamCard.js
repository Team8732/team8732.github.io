import React, { useState } from 'react';
import './TeamCard.css';

const STYLES = ['card--light', 'card--dark']

function TeamCard({ image, style, name, title, note }) {
  const [flipped, setFlipped] = useState(false);

  const checkStyle = STYLES.includes(style) ? 
        style : STYLES[0];

  return (
    <div className={`team-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className={`card-front ${checkStyle}`}>
          <img src={image} alt={name} className="profile-pic" />
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
        <div className={`card-back ${checkStyle}`}>
          <p><b>{note}</b></p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;