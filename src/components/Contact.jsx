import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Burke Duncan Road</div>
          <div class="text-two">Lancaster, SC 29729</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">(980)269-9935</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">mariahteasdale14@yahoo.com</div>
          <div class="text-two">mteasdale11@r2hstudent.org</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Contact Us</div>
        <p>
          We are always available to listen to your feedback! Please also send
          us a message for something you would like us to feature in our
          store.
        </p>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div class="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div class="input-box message-box">
            <textarea placeholder="Enter your message" required></textarea>
          </div>
          <div class="button">
            <input type="button" value="Send Now" />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Contact;