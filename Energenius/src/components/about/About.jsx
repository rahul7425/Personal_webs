import React from "react";
import "./Abouts.css";
import campus from "../../assets/website/campus_icon.jpeg.jpg";
import img from "../../assets/image/About us page-cuate.svg";
import Skills from "../skills/Skills";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
       <section>
        <div className="main_hero_img">
          <div className="main_hero_headding">
            <h1 className="solutions_headding">Empowering your business with innovative IT <br/>
            solutions for a smarter future.
<br/>
Connecting possibilities with cutting-edge technology
</h1>
                <p className="hero_peregrap_1">Innovate, Integrate, Elevate – Your IT partner for tomorrow</p>
               <div className="text-center">
               <Link to="/contact">
      <button className="Get_Started">Get Started</button>
    </Link>
               </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="Campus" style={{ color: "#1764a3" }}>
            About Company
          </h1>
          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <h1 className="Discover1">Energenius</h1>
                <p className="recognize">
                  has been a dynamic startup IT agency dedicated to delivering
                  innovative digital solutions. Specializing in website
                  development we cater to a diverse range of clients, helping businesses
                  establish a robust online presence. Our team of skilled
                  developers, designers is committed to
                  excellence, ensuring every project is tailored to meet our
                  clients' unique needs. At , we blend creativity with
                  cutting-edge technology to build user-friendly websites and
                  mobile applications that engage and inspire. As a small but
                  passionate team, we pride ourselves on our personalized
                  approach, working closely with our clients to bring their
                  visions to life.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="main_cont">
                <img
                  className="Campus_img12"
                  src={img}
                  style={{
                    marginLeft: "50px",
                    marginTop: "2px",
                    width: "100%",
                  }}
                  alt="Campus_image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Skills />
      </div>
      <div>
        <section>
          <div className="mains_background">
            <div className="wrap">
              <h1>VISION</h1>
              <p>
              Our vision is to revolutionize the digital landscape by delivering exceptional web and app solutions that blend innovation with seamless user experiences. We aspire to be the driving force behind our clients' digital success, crafting platforms that are not only visually stunning but also functionally flawless. Through relentless creativity and cutting-edge technology, we aim to set new standards in web and app development. Our commitment is to empower businesses to thrive in the digital age with solutions that are both impactful and reliable. We envision a future where our creations transform ideas into powerful digital experiences.
              </p>
            </div>
            {/* <div className="mai_round">
            <img className="round_img" src={img1} alt="" srcset="" />
          </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
