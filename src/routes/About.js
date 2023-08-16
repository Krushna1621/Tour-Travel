import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg  from '../assets/night.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
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
       <AboutUs></AboutUs>
       <Footer></Footer>
    </>
  )
}
export default About;