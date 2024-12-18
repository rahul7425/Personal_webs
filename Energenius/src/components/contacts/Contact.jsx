import React from "react";
import "./Contact.css";
import img from "../../assets/image/Contact us-rafiki.svg";

function Contact() {
  return (
    <div className="mainContainer">
      <div className="formContainer">
        <div className="left">
          <h3>Get In Touch</h3>
          <p>We are here for you! How can we help?</p>
          <form action="">
            <div className="inputbox">
              <input
                type="text"
                name="name"
                className="name"
                placeholder=" Name"
                id=""
              />
            </div>
            <div className="inputbox">
              <input
                type="email"
                name="email"
                className="email"
                placeholder=" Email Address"
                id=""
              />
            </div>
            <div className="inputbox">
              <input
                type="email"
                name="number"
                className="email"
                placeholder=" Contact Number"
                id=""
              />
            </div>
            <div className="inputbox">
              <input
                type="text"
                name="country"
                className="email"
                placeholder="Country Name"
                id=""
              />
            </div>
            <div className="inputbox">
              <textarea
                type="text"
                name="message"
                className="message"
                placeholder="your Message..."
                id=""
              />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
        <div className="right">
          <div className="illustration">
            {/* <img src={img} alt="" srcset="" /> */}
          </div>
          <div className="contactInfo">
            <div className="infobox">
              <h4>
                Address:{" "}
                <span>
                  Shree Niwas Nagar, Opposite Road No. 6, VKI, Jaipur
                </span>{" "}
              </h4>
            </div>
            <div className="infobox">
              <h4 className="heading">
                Contact: <span>+917357444352</span>{" "}
              </h4>
            </div>
            <div className="infobox">
              <h4>
                Email for Enquiry: <span>@energenius.com</span>{" "}
              </h4>
            </div>
            <div className="infobox">
              <h4>
                Email for Contact: <span>contact@energenius.com</span>{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
