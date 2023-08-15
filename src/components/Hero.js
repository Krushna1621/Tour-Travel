import React from 'react'
function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt="heroImg" src={props.heroImage}></img>
      <div className='hero-text'>
           <h1>{props.title}</h1>
           <p>{props.text}</p>
           <a href={props.url} className={props.btnClass}>
            Travel Plan
           </a>
      </div>
    </div>
  )
}
export default Hero
