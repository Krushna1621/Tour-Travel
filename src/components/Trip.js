import './TripStyle.css';
import React from 'react'
import TripData from './TripData';
import Trip1 from '../assets/5.jpg';
import Trip2 from '../assets/8.jpg';
import Trip3 from '../assets/6.jpg';
function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can Discover Uniquie destination by using google maps</p>
      <div className='tripcard'>
      <TripData
      image={Trip1}
      heading="Trip in Indonesia"
      text="Embark on an unforgettable journey through Indonesia, a tropical paradise brimming with stunning landscapes, diverse cultures, and vibrant traditions. Explore lush rainforests, pristine beaches, and ancient temples that tell tales of rich history. From the bustling streets of Jakarta to the tranquil beauty of Bali, Indonesia promises a captivating blend of adventure and relaxation for an immersive and culturally enriching experience."
      ></TripData>

      <TripData
      image={Trip2}
      heading="Trip in India"
      text="Discover the captivating tapestry of India on a remarkable journey. Immerse yourself in its cultural kaleidoscope, visiting awe-inspiring monuments, serene temples, and bustling markets. From the iconic Taj Mahal to the tranquil backwaters of Kerala, India offers a blend of ancient heritage and modern vibrancy, promising an enriching travel experience that spans diverse landscapes and traditions."
      ></TripData>

      <TripData
      image={Trip3}
      heading="Trip in France"
      text="Embark on a captivating journey through France's timeless beauty. From the romantic streets of Paris to the charming villages of Provence, experience art, cuisine, and architecture at their finest. Explore iconic landmarks like the Eiffel Tower, indulge in exquisite wine and cheese, and bask in the enchanting ambiance of the French countryside. France offers a blend of sophistication and rustic charm for an unforgettable travel experience."
      ></TripData>
      </div>
    </div>
  )
}
export default Trip;