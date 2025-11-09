import React from 'react';
import TeamCard from './TeamCard';
import './TeamGrid.css';

const teamMembers = [
  {
    image: '/images/profiles/shreya.png',
    name: 'Shreya',
    title: 'Code Lead',
    note: 'i love syntax and solder',
  },
  {
    image: '/images/profiles/trinity.png',
    name: 'Trinity',
    title: 'Mechanical Lead',
    note: 'can fix anything with zip ties',
  },
  {
    image: '/images/profiles/callie.png',
    name: 'Callie-Rae',
    title: 'Electrical Lead',
    note: 'our daisy-chain queen'
  }
];

function TeamGrid() {
  return (
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} {...member} />
      ))}
    </div>
  );
}

export default TeamGrid;