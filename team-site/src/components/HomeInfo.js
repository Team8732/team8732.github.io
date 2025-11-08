import React from 'react'
import './HomeInfo.css'

function HomeInfo() {
  return (
    <>
        <section className="info-bar team">
        <h2>Our Team</h2>
        <p>We’re a group of passionate students and mentors building robots, solving problems, and having fun along the way.</p>
        </section>

        <section className="info-bar org">
        <h2>Our Organization</h2>
        <p>We’re part of [Your School/Club Name], where we collaborate across disciplines to learn, lead, and innovate.</p>
        </section>

        <section className="info-bar frc">
        <h2>What is FRC?</h2>
        <p>FIRST Robotics Competition is an international high school robotics program that combines engineering, teamwork, and real-world impact.</p>
        </section>
    </>
  )
}

export default HomeInfo
