import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Fidem from '../assets/images/Fidem logo.png';
import "../styles/Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <Link to="/" className="items">
            <img className="logo" src={Fidem} alt="company logo" />
          </Link> 
          <Link to="/about" className="items">About Us</Link>
          <Link to="/services" className="items">Services</Link>
          <Link to="/contact" className="items">Contact</Link>
        </ul>
      )}
      <button onClick={toggleNav} className="button">
        Button
      </button>
    </nav>
  );
}

export default Navbar;
