import React from 'react'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'
import { TextSection } from '../components/TextSection'
import MentorGrid from '../components/MentorGrid'

function AboutMentors() {
  return (
    <>
        <Hero image="/images/about-hero.png">
            <h1>Meet the Mentors</h1>
        </Hero>
        <TextSection>
            <h1>Hello!</h1>
            <p>Behind every robot is a team of legends. Meet ours!</p>
        </TextSection>
        <MentorGrid></MentorGrid>
        <Footer></Footer>
    </>
  )
}

export default AboutMentors