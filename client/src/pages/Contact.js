import React from "react";
import '../styles/Contact.css';


  function Contact () {
    return (
      <div className="contactUs">
        <h1>Contact Us</h1>
        <form className="form" method="post" action="">
        <label>Name:</label>
        <input
          type="text"
          id="inputName"
          name="name"
          placeholder="Please enter your name"
        />
        <label>Email:</label>
        <input type="email" id="inputEmail" name="email" placeholder="Email" />
        <label>Company Name:</label>
        <input
          type="text"
          id="inputBusiness"
          name="business"
          placeholder="Company Name"
        />
        {/* <label>City:</label>
        <input type="text" id="inputCity" name="city" placeholder="City" /> */}
        <label>Tell Us About Yourself:</label>
        <textarea name="message" placeholder="Tell Us About Yourself" />
        <input type="submit" value="send" />
        </form>
      </div>
    );
  }

export default Contact;
