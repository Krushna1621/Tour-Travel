import React, { useState } from 'react';
import './Navbarstyle.css';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItem';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked?"nav-menu-active":"nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName}>
              <i className={item.iconName}></i>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
        <li>
          <button className='.nav-links-mobile'>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
