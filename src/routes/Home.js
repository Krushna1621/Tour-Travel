import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroImage  from '../assets/12.jpg'
function Home() {
  return (
    <>
       <Navbar></Navbar>
       <Hero
       cName="hero"
       heroImage={heroImage}
       title="Your Journey your story"
       text="choose your favourite distination"

       ></Hero>
    </>
  )
}
export default Home