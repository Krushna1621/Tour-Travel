import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceImage from '../assets/img (1).jpg'
import Footer from '../components/Footer';
import Trip from '../components/Trip';
function Service() {
  return (
    <>
      <Navbar></Navbar>
       <Hero
       cName="hero-mid"
       heroImage={ServiceImage}
       title="Service"
      
       btnClass="hide"
       ></Hero>
       <Trip></Trip>
       <Footer></Footer>
    </>
  )
}
export default Service;