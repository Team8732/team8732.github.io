import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaChevronDown } from "react-icons/fa";


function Navbar() {


  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = ()=> {
    setIsOpen(!isOpen);
  }

  const toggleSubMenu = () => setIsSubMenuOpen(prev => !prev);

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  return (
    <> 
        <nav className="navbar">
            <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/favicon.ico" alt="Logo" style={{ height: '60px' }} />
            </Link>

            <div className= {isOpen ? "navbar-container active" : "navbar-container"}>
                
                <div
                  className="menu-item sub"
                  onMouseEnter={() => !isTouchDevice() && setIsSubMenuOpen(true)}
                  onMouseLeave={() => !isTouchDevice() && setIsSubMenuOpen(false)}
                  onClick={toggleSubMenu}
                >
                  <Link to="/about" className="menu-link">
                    About <FaChevronDown />
                  </Link>

                  {isSubMenuOpen && (
                    <div className="submenu">
                      <Link to="/about/team" className="submenu-link">Team</Link>
                      <Link to="/about/mentors" className="submenu-link">Mentors</Link>
                      <Link to="/about/first" className="submenu-link">FIRST</Link>
                    </div>
                  )}
                </div>

                <Link to="/join">Join Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="sponsors">Sponsors</Link>
                
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars/>
            </div>
        
        </nav>
    </>
  )
}

export default Navbar
