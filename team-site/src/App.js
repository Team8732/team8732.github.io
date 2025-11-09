import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPic from './components/TeamPic';
import Home from './pages/Home';
import About from './pages/About';
import AboutTeam from './pages/AboutTeam';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/about/team" element={<AboutTeam/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
