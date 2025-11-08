import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-section left">
            <h2 className="footer-title"><Link to="/">Team 8732</Link></h2>
            <div className="footer-grid">
                <Link to="/contact">Contact</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/sponsor-us">Sponsor Us</Link>
                <Link to="/join">Join Us</Link>
            </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-section middle">
            <h3 className="footer-title"> <Link to="/about">About</Link></h3>
            <div className="footer-grid">
            <Link to="/team">Team</Link>
            <Link to="/first">FIRST</Link>
            <Link to="/mentors">Mentors</Link>
            <Link to="/outreach">Outreach</Link>
            </div>
        </div>

        <div className="footer-section right">
            <a href="https://www.firstinspires.org/programs/frc/" target="_blank" rel="noopener noreferrer">
                <img src="/images/first-logo.png" alt="FIRST Logo" className = "footer-logo"/>
            </a>
            <img src="/images/team-logo.png" alt="Team Logo" className="footer-logo" />
        </div>
    </footer>
  )
}

export default Footer
