import React, { useEffect, useState } from 'react';
import './TeamPic.css';

export default function TeamPic() {
  const [gateState, setGateState] = useState('initial');

  useEffect(() => {

    const handleScrollAttempt = () => {
      if (gateState === 'initial') {
        setGateState('revealed');

        setTimeout(() => {
          setGateState('unlocked');
        }, 1000); 
      }
    };

    window.addEventListener('wheel', handleScrollAttempt, { once: true });
    window.addEventListener('touchstart', handleScrollAttempt, { once: true });

    return () => {
      window.removeEventListener('wheel', handleScrollAttempt);
      window.removeEventListener('touchstart', handleScrollAttempt);
    };
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