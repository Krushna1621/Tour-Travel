import React from 'react';
import './Destinationstyle.css';
import img1 from '../assets/13.jpg';
import img2 from '../assets/14.jpg';
import img3 from '../assets/8.jpg';
import img4 from '../assets/9.jpg';
import DestinationData from './DestinationData';
function Destination() {
  return (
    <div className='destination'>
         <h1>Popular Destination</h1>
         <p>Tours gives the opportunity to see a lot,within a time frame</p>
         <DestinationData
           heading="Mahabaleshwer"
           text="Mahabaleshwar is a serene and enchanting hill station located in the Western Ghats of Maharashtra, India. It is renowned for its breathtaking landscapes, lush greenery, pleasant climate, and a variety of attractions that make it a popular destination for tourists seeking a peaceful getaway from the hustle and bustle of city life."
           img1={img1}
           img2={img2}
         ></DestinationData>
         <DestinationData
           heading="Chikhaladara,"
           text="Chikhaldara is a picturesque hill station nestled in the Amravati district of Maharashtra, India. Situated at an elevation of about 1,118 meters (3,675 feet) above sea level in the Satpura Range, Chikhaldara offers a tranquil escape from the hustle and bustle of city life. Here's a description for your tour"
           img1={img3}
           img2={img4}
         ></DestinationData>
    </div>
  )
}
export default Destination;