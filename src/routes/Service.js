import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceImage from '../assets/img (1).jpg'
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
    </>
  )
}
export default Service;