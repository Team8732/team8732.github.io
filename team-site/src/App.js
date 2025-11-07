import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamPic from './components/TeamPic';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TeamPic />
                <div style={{ padding: '2rem' }}>    
                  <h1>Testing Navbar</h1>
                  <p>This is a temporary placeholder. Main page will go here later.</p>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
