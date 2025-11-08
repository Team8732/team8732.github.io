import React from 'react'
import AboutPage from '../components/AboutPage'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'

function About() {
  return (
    <>
        <AboutPage/>
        <Hero image="/images/about-hero.png">
            <h1>About</h1>
        </Hero>

        <h1>why... hello there </h1>
        <Footer/>
    </>
  )
}

export default About
