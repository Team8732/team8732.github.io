import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { FaBars } from "react-icons/fa";


function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = ()=> {
    setIsOpen(!isOpen);
  }

  return (
    <>
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                    <img src="/favicon.ico" alt="Logo" style={{ height: '60px' }} />
            </Link>

            <div className= {isOpen ? "navbar-container active" : "navbar-container"}>
                

                <Link to="/about">About</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/test">Testing</Link>

            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars/>
            </div>
        
        </nav>
    </>
  )
}

export default Navbar
