import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="socMedia">
            <LinkedInIcon onClick={event => window.location.href=''} />
            <EmailIcon onClick={event => window.location.href=''} />
        </div>
        <p> &copy; 2023 All Rights Reserved</p>
        
    </div>
  )
}

export default Footer;