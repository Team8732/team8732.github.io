import React from 'react'
import AboutPage from '../components/AboutPage'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { TextSection } from '../components/TextSection'

function About() {
  return (
    <>
        <AboutPage/>
        <Hero image="/images/about-hero.png">
            <h1>About</h1>
        </Hero>

        <TextSection>
          <h1>why... hello there!</h1>
          <p>
            This will be the 'About' page for our website!
          </p>
        </TextSection>
        <Footer/>
    </>
  )
}

export default About
