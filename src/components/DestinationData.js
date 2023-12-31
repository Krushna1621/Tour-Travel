import './Destinationstyle.css';
import React from 'react'

function DestinationData(props) {
  return (
    <div className='first-destination'>
             <div className='des-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
             </div>
             <div className='image'>
               <img alt="image" src={props.img1}/>
               <img alt="image" src={props.img2}/>
             </div>
    </div>
  )
}
export default DestinationData;
