import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/images/nurse-helping-patient.jpg";
import "../styles/Home.css";

// TODO: work on adding photos to home page and styling
function Home() {
  return (
    <div className="home"  style={{ backgroundImage: `url(${photo})` }}>
      <div
        className="headerContainer">
        <h1> Fidem Case Management </h1>
        <p>
          Nurse Case Management
        </p>
        <Link to="/contact">
          <button> Let's get started </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
