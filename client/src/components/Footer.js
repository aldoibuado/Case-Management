import React from 'react';
import linkedin from '../assets/images/linkedin icon.png';
import '../styles/Footer.css';

// TODO: Make Footer and style it
function Footer () {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>Fidem Case Management</h4>
            <p>
              company info
            </p>
          </div>
          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About Us</p>
            </a>
            <a href="/services">
              <p>Services</p>
            </a>
            <a href="/contact">
              <p>Contact Us</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Contact</h4>
            <p>Address: 12354 Northridge Dr.
              Los Angeles, CA 95848
            </p>
            <p>Phone: xxx-xxx-xxxx</p>
            <p> Email: fakeemail@email.com</p>
          </div>
          <div className="sb_footer-links-div">
            <h4>Social Media</h4>
            <div className="socialmedia">
              <p><img src={linkedin} alt="linkedin logo" /></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} Fidem Case Management. All rights reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;