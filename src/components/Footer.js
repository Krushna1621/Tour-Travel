import './Footerstyle.css';
import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshoot</a>
          <a href="/">Contact Us</a>
          <a href="/">All version</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
          <a href="/">License</a>
          <a href="/">Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
