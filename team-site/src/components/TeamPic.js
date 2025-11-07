import React, { useEffect, useState } from 'react';
import './TeamPic.css';

export default function TeamPic() {
  const [gateState, setGateState] = useState('initial');

  useEffect(() => {

    setTimeout(() => {
        setGateState('revealed');
    }, 1000); 

    setTimeout(() => {
        setGateState('unlocked');
    }, 1000); 

  }, [gateState]);

  return (
    <div className={`team-container ${gateState}`}>
      <img src='/images/team_image.JPG' alt="a lovely picture of my lovely team" />
      <div className="team-message">
        <h2>Team 8732:</h2>
        <h1>Trinity Force</h1>
      </div>
    </div>
  );
}