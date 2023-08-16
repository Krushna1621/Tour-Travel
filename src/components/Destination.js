import React from 'react';
import './Destinationstyle.css';
function Destination() {
  return (
    <div className='destination'>
         <h1>Popular Destination</h1>
         <p>Tours gives the opportunity to see a lot,within a time frame</p>
         <div className='first-destination'>
             <div className='des-text'>
                <h2>Mahabaleshwar</h2>
                <p>Mahabaleshwar is a serene and enchanting hill station located in the Western Ghats of Maharashtra, India. It is renowned for its breathtaking landscapes, lush greenery, pleasant climate, and a variety of attractions that make it a popular destination for tourists seeking a peaceful getaway from the hustle and bustle of city life.</p>
             </div>
             <div className='image'>
               <img alt="image" src="https://assets.cntraveller.in/photos/6177ad51c8f257cbe891acda/16:9/w_960,c_limit/courtyard-marriott-mahabaleshwar-3.jpg"/>
               <img alt="image" src="https://mahabaleshwartourism.in/images/partner-tours/one-day-travel-pune-to-mahabaleshwar-sightseeing-tour-package-private-cab-small.jpg"/>
             </div>
         </div>
    </div>
  )
}
export default Destination;