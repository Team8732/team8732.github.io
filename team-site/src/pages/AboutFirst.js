import React from 'react'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { TextSection } from '../components/TextSection'

function AboutFirst() {
  return (
    <>
        <Hero image="/images/about-hero.png">
            <h1>FIRST Robotics</h1>
        </Hero>
        <TextSection>
            <h2>What is FIRST?</h2>
            <p>
                FIRST® (For Inspiration and Recognition of Science and Technology) is a global nonprofit that uses robotics 
                competitions to inspire students to pursue science, technology, engineering, art, and math. Founded by 
                inventor Dean Kamen in 1989, FIRST creates hands-on, team-based programs that bring real-world engineering
                challenges into schools and communities around the world.
                <br>
                </br>

                FIRST is about building robots and people. Students learn collaboration, leadership, creative problem-solving, 
                and professional engineering skills in a supportive, high-energy environment, with "levels" of competitions that
                range from pre-school to high school.
            </p>
            <br/>
            <h2>The FIRST Robotics Competition (FRC)</h2>
            <p>The FIRST Robotics Competition is the highest-level program offered by FIRST. Each season, high school teams have 
                six weeks to design, prototype, build, and program a robot that can complete a brand-new game challenge revealed 
                each January.
                <br/>

                FRC combines:
                <ul>
                    <li>Engineering & Design: CAD, mechanical design, manufacturing, sensors, pneumatics</li>
                    <li>Programming: Coding languages (Java, C++, etc!), control systems, autonomous routines, cameras</li>
                    <li>Electronics: wiring, power management, motor controllers</li>
                    <li>Strategy: game analysis, scouting, match planning</li>
                    <li>Teamwork & Leadership: marketing, outreach, project management, fundraising</li>
                </ul>
                <br/>
                Teams compete at regional and district competitions, aiming to qualify for the FIRST Championship, 
                where teams from around the world come together to celebrate innovation and compete on a global stage.
            </p>
        </TextSection>
        <Footer></Footer>
    </>
  )
}

export default AboutFirst