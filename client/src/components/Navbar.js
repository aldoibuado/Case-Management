import React, { useState } from "react";
import fidem from "../assets/images/Fidem logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
        <img src={fidem} alt="company logo" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About Us </Link>
          <Link to="/services"> Services </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        {/* <Link to="/"> Home </Link> */}
        <Link to="/about"> About Us </Link>
        <Link to="/services"> Services </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
