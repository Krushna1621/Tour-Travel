import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroImage  from '../assets/12.jpg'
import Destination from '../components/Destination'
function Home() {
  return (
    <>
       <Navbar></Navbar>
       <Hero
       cName="hero"
       heroImage={heroImage}
       title="Your Journey your story"
       text="choose your favourite distination"
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       ></Hero>
      <Destination></Destination>
    </>
  )
}
export default Home