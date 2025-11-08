import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPic from './components/TeamPic';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element= {<Home/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
