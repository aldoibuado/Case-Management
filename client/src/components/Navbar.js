import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fidem from "../assets/images/Fidem logo.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">
          <img className="logo" src={fidem} alt="company logo" />
        </Link>
        <Link to="/about">About Us</Link>
        <Link to="services">Services</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
