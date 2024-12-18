import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Our Team",
    link: "/team",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Admin-Login",
    link: "/adminLogin",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
];
const Footer = () => {
  return (
    <>
      <div>
        <Link 
          to="https://api.whatsapp.com/send?phone=7357444352&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
          className="float"
          target="_blank"
        >
          <i class="fa-brands fa-whatsapp my-float"></i>
        </Link>
      </div>
      <div className="bg-dark text-white">
     
       
            {/* company Details */}

            {/* Links */}

            <div className="main_footer_size">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">

                    <h1 className="address">
                    Energenius
                    </h1>
                    <p className="text-sm">
                    Energenius
                      has been a dynamic startup IT agency dedicated to delivering innovative digital solutions. Specializing in website development, mobile application creation, we cater to a diverse range of clients, helping businesses establish a robust online presence. Our team of skilled developers and designers is committed to excellence, ensuring every project is tailored to meet our clients' unique needs.
                    </p>
                    <br />
                    
                  </div>

                  <div className="col-md-3">
                <div className="file_footer">
                <h1 className="address1">
                    Company
                  </h1>
                  <ul className={`flex flex-col gap-3`}>
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                      >
                        <Link to={link.link}>
                          <span className="span_title">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                  </div>
                  
                  <div className="col-md-4">
                  <h1 className="address">
                    Address
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <h1 className="footer_address_text">Shree Niwas, National Handeloom, Vaishali Nagar, Jaipur, Rajasthan</h1>

                    <li>
                      <h1 className="footer_address_text">Contact: +91-7357444352, +91-9799798090</h1>
                    </li>
                    <li>
                      <h1 className="footer_address_text">Email for Enquiry: <span> info@energenius.com</span></h1>
                    </li>
                    <li>
                      <h1 className="footer_address_text"> Email for Contact: <span>contact@energenius.com</span></h1> 
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          
       
        <div className="main_footer_new">
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <h1 className="Copyright_text">Copyright © 2024, Energenius All rights reserved.</h1>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                <h1 className="Terms_newtext">
        <Link to="/terms">Terms of Use</Link>
        {' | '}
        <Link to="/privacyPolicy">Privacy Policy</Link>
        {' | '}
        <Link to="/cancellationrefund">Cancellation & Refund Policy</Link>
      </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
