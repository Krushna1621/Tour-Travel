import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImage from '../assets/2.jpg'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
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
       <ContactForm></ContactForm>
       <Footer></Footer>
    </>
  )
}
export default Contact;