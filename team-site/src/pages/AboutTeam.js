import React from 'react'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { TextSection } from '../components/TextSection'

function AboutTeam() {
  return (
    <>
        <Hero image="/images/about-hero.png">
            <h1>About</h1>
        </Hero>
        <TextSection>
            <h1>Meet our Team!</h1>
            <p>Team 8732 has some wonderful students on it. Get to know us!</p>
        </TextSection>
        <Footer></Footer>
    </>
  )
}

export default AboutTeam
