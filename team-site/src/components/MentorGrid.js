import React from 'react';
import TeamCard from './TeamCard';
import './MentorGrid.css';

const teamMembers = [
  {
    image: '/images/profiles/josh.png',
    name: 'Joshua Lewis',
    title: 'Mentor',
    note: 'Happy birthday!',
  },
  {
    image: '/images/profiles/darius.png',
    name: 'Darius Blount',
    title: 'Mentor',
    note: '10312!',
  },
  {
    image: '/images/profiles/brandon.png',
    name: 'Brandon Diaz',
    title: 'Mentor',
    note: 'My favorite robot is Germy Cheese'
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