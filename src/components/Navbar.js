import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle"></i> About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
