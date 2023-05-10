import React from 'react';
import nurse1 from '../assets/images/nurse.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
       <div className='leftSide' style={{ backgroundImage: `url(${nurse1})` }}></div>
       <div className="rightSide">
        <h1> Contact Us </h1>
        <form id="contact" method="POST">
          <label htmlFor='name'>Full Name</label>
          <input name="name" placeholder="Enter your full name" type='text'/>
          <label htmlFor='email'>Email</label>
          <input name="email" placeholder="Enter your email" type='email'/>
          <label htmlFor='message'>Message</label>
          <textarea rows='6' placeholder='Enter your message' name="message" required></textarea>
          <button type='submit'>Send Message</button>
        </form> 
       </div>
    </div>
  )
}

export default Contact;