import React from "react";
import { Button } from "./Button";
import video from '../assets/videos/video-2.mp4';
import "../styles/HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>Case Management</h1>
      <p>We provide case management services</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Ready to get started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
