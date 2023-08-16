import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImage from '../assets/2.jpg'

function Contact() {
  return (
    <>
      <Navbar></Navbar>
       <Hero
       cName="hero-mid"
       heroImage={AboutImage}
       title="Contact"
       btnClass="hide"
       ></Hero>
    </>
  )
}
export default Contact;