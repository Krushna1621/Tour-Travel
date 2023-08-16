import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg  from '../assets/night.jpg'
function About() {
  return (
    <>
      <Navbar></Navbar>
       <Hero
       cName="hero-mid"
       heroImage={AboutImg}
       title="About"
      
       btnClass="hide"
       ></Hero>
    </>
  )
}
export default About;