import React from "react";
import './Footer.css';
import instagramLogo from '../assets/instagram-logo.png.png'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Quick Links Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/aboutUs">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contactUs">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Customer Support Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Customer Support</h5>
                        <ul className="list-unstyled">
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/support">Support</a></li>
                        </ul>
                    </div>
                    {/* About Company Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5>About Company</h5>
                        <p className="ptag1">
                            Adventure Tales World is dedicated to providing the best travel experiences in Georgia. Our team is committed to offering you exceptional service and unforgettable memories.
                        </p>
                    </div>
                    {/* Social Media Links Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled social-media">
                            <li>
                                <a href="https://www.instagram.com/adventure_tales_world?igsh=MW5wZ3lpMG9sYmlmdw==" target="_blank" rel="noopener noreferrer">
                                    <img src={instagramLogo} alt="Instagram" className="social-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p>&copy; {new Date().getFullYear()} Adventure Tales World. All rights reserved.</p>
                        {/* <p>Website created by <strong>Rahul Singh</strong>.</p>  */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
