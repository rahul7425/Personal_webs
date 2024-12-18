import React, { useEffect } from 'react';
import './ContactUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  return (
    <div className="contact-container" data-aos="fade-up">
      <h2 data-aos="fade-down">Contact Us</h2>

      <div className="contact-info">
        {/* Email Section */}
        <div className="contact-item email" data-aos="fade-left">
          <h3>Email Us</h3>
          <p>Have any queries? Feel free to drop us an email at:</p>
          <p><a href="mailto:rathoresachin2023@gmail.com">rathoresachin2023@gmail.com</a></p>
        </div>

        {/* WhatsApp Section */}
        <div className="contact-item whatsapp" data-aos="fade-right">
          <h3>WhatsApp Us</h3>
          <p>Contact us on WhatsApp for quick inquiries:</p>
          <p><a href="https://wa.me/c/995598283810">+995 598 28 38 10</a></p>
        </div>

        {/* Phone Section */}
        <div className="contact-item phone" data-aos="fade-left">
          <h3>Call Us</h3>
          <p>We are available for office visits from Monday to Sunday, 9 AM - 6 PM:</p>
          <p><a href="tel:+995598283810">+995 598 28 38 10</a></p>
        </div>

        {/* Address Section */}
        <div className="contact-item address" data-aos="fade-right">
          <h3>Our Address</h3>
          <p>You can visit us at our Tbilisi office:</p>
          <p>Tbilisi, Georgia</p>
        </div>
      </div>

      {/* Office Hours Section */}
      <div className="contact-office-hours" data-aos="zoom-in">
        <h2>For Visit</h2>
        <h5>Office Hours</h5>
        <p>Monday to Sunday: 9 AM - 6 PM</p>
        <h4>Call Services</h4>
        <p>Call services available 24/7</p>
      </div>

      {/* Social Media Section */}
      <div className="contact-social" data-aos="zoom-in-up">
        <h2>Connect With Us</h2>
        <p>Follow us on social media for the latest updates:</p>
        <div className="social-links">
          <a href="https://www.instagram.com/p/C_arE4oN58E/?igsh=NW9tdWVsbjN1NnQx" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
