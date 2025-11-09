import React from 'react';
import TeamCard from './TeamCard';
import './MentorGrid.css';

const teamMembers = [
  {
    image: '/images/profiles/shreya.png',
    name: 'Joshua Lewis',
    title: 'title',
    note: 'note at the back',
  },
  {
    image: '/images/profiles/darius.png',
    name: 'Darius Blount',
    title: 'title',
    note: 'note at the back',
  },
  {
    image: '/images/profiles/brandon.png',
    name: 'Brandon Diaz',
    title: 'title',
    note: 'note at the back'
  }
];

function TeamGrid() {
  return (
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} {...member} style='card--dark'/>
      ))}
    </div>
  );
}

export default TeamGrid;