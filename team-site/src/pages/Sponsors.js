import React from 'react'
import SponsorGrid from '../components/SponsorGrid'
import { Hero } from '../components/Hero'
import Footer from '../components/Footer'

function Sponsors() {
  return (
    <>
        <Hero image="/images/about-hero.png">
            <h1>Sponsors!</h1>
        </Hero>
        <SponsorGrid/>
        <Footer/>
    </>
  )
}

export default Sponsors