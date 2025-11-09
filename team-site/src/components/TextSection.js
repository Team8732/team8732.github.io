import React from 'react';
import './TextSection.css';

export const TextSection = ({ children }) => {
  return (
    <section className="text-section">
      {children}
    </section>
  );
};