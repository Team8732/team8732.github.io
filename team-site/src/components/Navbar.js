import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/favicon.ico" alt="Logo" style={{ height: '60px' }} />
                </Link>

                <Link to="/about">About</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/test">Testing</Link>

                <div className="menu-icon">

                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
