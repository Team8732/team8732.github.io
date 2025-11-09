import React from 'react'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { TextSection } from '../components/TextSection'
import TeamGrid from '../components/TeamGrid';

function AboutTeam() {
  return (
    <>
        <Hero image="/images/about-hero.png">
            <h1>Meet the Team</h1>
        </Hero>
        <TextSection>
            <h1>Hello!</h1>
            <p>Team 8732 has some wonderful members. Get to know us!</p>
        </TextSection>
        <TeamGrid></TeamGrid>
        <Footer></Footer>
    </>
  )
}

export default AboutTeam