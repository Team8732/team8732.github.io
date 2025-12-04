import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPic from './components/TeamPic';
import Home from './pages/Home';
import About from './pages/About';
import AboutTeam from './pages/AboutTeam';
import AboutMentors from './pages/AboutMentors';
import AboutFirst from './pages/AboutFirst.js';
import Join from './pages/Join.js'
import Contact from './pages/Contact.js';
import Sponsors from './pages/Sponsors.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/team" element={<AboutTeam/>}/>
          <Route path="/about/mentors" element={<AboutMentors/>}/>
          <Route path="/about/first" element={<AboutFirst/>}/>
          <Route path="/join" element={<Join/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/sponsors" element={<Sponsors/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
