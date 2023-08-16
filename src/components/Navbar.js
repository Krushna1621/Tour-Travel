import React, { useState } from 'react';
import './Navbarstyle.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { MenuItems } from './MenuItem';
import SignupForm from './SignupForm'; // Import your SignupForm component

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
  };

  const handleSignupFormClose = () => {
    setShowSignupForm(false);
  };

  const handleSignupFormSubmit = () => {
    // Handle form submission logic here
    // For example, you might call an API to handle user registration
    // After successful registration, you can navigate to a different route
    navigate('/success'); // Replace '/success' with the desired route
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu-active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName}>
              <i className={item.iconName}></i>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
        <li>
          <button className='.nav-links-mobile' onClick={handleSignupClick}>
            Sign Up
          </button>
        </li>
      </ul>

      {showSignupForm && (
        <SignupForm
          onClose={handleSignupFormClose}
          onSubmit={handleSignupFormSubmit}
        />
      )}
    </nav>
  );
}

export default Navbar;
