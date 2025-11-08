import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

export const Hero = ({ children, image }) => {
    
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          {children}
        </div>
      </div>
    </section>
  );
};