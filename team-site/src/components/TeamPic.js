import React, { useEffect, useState } from 'react';
import './TeamPic.css';

export default function TeamPic() {
  const [gateState, setGateState] = useState('initial');
  useEffect(() => {
    const revealTimeout = setTimeout(() => setGateState('revealed'), 1000);
    const unlockTimeout = setTimeout(() => setGateState('unlocked'), 2000);

    return () => {
      clearTimeout(revealTimeout);
      clearTimeout(unlockTimeout);
    };
  }, []);

  const [offsetY, setOffsetY] = useState(0); //parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setOffsetY(scrollPosition * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`team-container ${gateState}`}>
      <div className="image-wrapper">
        <img
          src="/images/team_image.JPG"
          alt="a lovely picture of my lovely team"
          style={{
            transform: `translate(-9vw, calc(12% + ${offsetY * 0.2}px)) scale(1.3)`,
          }}
        />
      </div>

      <div className="team-message">
        <h2>Team 8732:</h2>
        <h1>Trinity Force</h1>
      </div>
    </div>
  );
}
