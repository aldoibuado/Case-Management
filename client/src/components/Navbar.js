import React from 'react';
import fidem from '../assets/images/Fidem logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={fidem} alt="company logo" />
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/services"> Services </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  )
}

export default Navbar;