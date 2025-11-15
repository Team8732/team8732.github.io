import React from 'react'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { TextSection } from '../components/TextSection'

function About() {
  return (
    <>
        <Hero image="/images/about-hero.png">
            <h1>About</h1>
        </Hero>

        <TextSection>
          <h1>Who are we?</h1>
          <p>
            Team 8732, Trinity Force, was founded to empower young women in STEM, creating a supportive space where underrepresented voices can grow, contribute, and lead. As an all-girls team, we intentionally focus on providing hands-on technical skills and real-world problem solving opportunities that allow young women, many from underrepresented backgrounds, to thrive in STEM fields traditionally lacking diversity.
            <br/>
            We also value diversity beyond gender, actively engaging with local schools, churches, and community organizations to share our program and recruit students from all backgrounds. We seek to break down barriers to participation by ensuring that financial limitations never prevent students from joining.
            <br/> 
            Within our team, we celebrate the unique strengths that come from each individual's perspective, knowing that these diverse ideas and ways of thinking help us approach problems creatively. By fostering this inclusive, supportive environment, our students learn the values of collaboration and mutual respect- skills that will benefit them well beyond the program. 
          </p>
        </TextSection>
        <Footer/>
    </>
  )
}

export default About
