import React from "react";
import img5 from "../../assets/website/WhatsApp Image 2024-05-12 at 12.38.48_373117c7.png";
import "./About.css";
import Services from "../Services/Services";
import Services1 from "./serviceSection1/Services1";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
     <section>
        <div className="main_hero_img">
          <div className="main_hero_headding">
            <h1 className="solutions_headding">Unleash the full potential of your business<br/> with our cutting-edge IT services.<br/>
            From innovative solutions to seamless integration,</h1>
                <p className="hero_peregrap_1"> we empower your digital transformation journey.</p>
               <div className="text-center">
               <Link to="/contact">
      <button className="Get_Started">Get Started</button>
    </Link>
               </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          {/* <h2 className="section-heading">Our Services</h2> */}
        </div>
        <div style={{marginTop:"80px"}}>
          <Services1/>
          <Services />
        </div>
        {/* <div className="row">
          <h1 style={{ color: "#ab0000" }} className="hh1">
            Our Projects
          </h1>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  srcset=""
                />
              </div>

              <h3> QuickoBook</h3>
              <br />
              <p>
                Quickobook is an online portal for all your healthcare needs.
                Big team of medical experts is there for you, from finding the
                right doctors and hospitals to booking appointments and giving
                any kind of medical help in between.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img src={img5} alt="" srcset="" />
              </div>
              <h3>Keendroid</h3>
              <br />
              <p>
                Our product believes in keeping the students safe and promotes
                social and creative learning. The safety of students on campus
                has become a high priority in many countries..
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  srcset=""
                />
              </div>
              <h3>SMADHAN</h3>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.loremconsequatur
                necessitatibus eaque.lorem
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Service;
