import React from "react";
import yellowCar from "../../assets/website/team.png";
import BrandsLogo from "../BrandsLogo/BrandsLogo";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import BlogsComp from "../Blogs/BlogsComp";
import img3 from "../../assets/blog/education_h.webp";
import img4 from "../../assets/blog/html5.webp";
import img5 from "../../assets/website/hero-img.png";
import img6 from "../../assets/website/img.jpg";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="main_hero_img">
          <div className="main_hero_headding">
            <h1 className="solutions_headding">
              We don’t just deliver digital solutions
              <br />
              WE'RE DELIVERING SUCCESS FOR YOUR BUSINESS
            </h1>
            <p className="hero_peregrap_1">
              YOUR GLOBAL TECHNOLOGY PARTNER FOR IMPACTFUL DIGITAL SOLUTIONS.
            </p>
            <div className="text-center">
              <Link to="/contact">
                <button className="Get_Started">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="container sm:mt-0 main_hero_new">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center"
            // style={{ marginTop: "-200px" }}
          >
            {/* Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <img
                src={yellowCar}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px]"
              />
              <div
                data-aos="slide-right"
                className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
              >
                <p className="text-gray-500 text-sm ">⭐Projects</p>
                <h1 className="font-bold">
                  200+ <span className="font-normal">Done</span>
                </h1>
              </div>
            </div>

            {/* Text section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
                style={{ lineHeight: 1.2 }}
              >
                Building Brands with the{" "}
                <span className="" style={{ color: "#1764a3v" }}>
                  Energenius
                </span> 
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
              "Your trusted partner in navigating the dynamic world of technology. From web development and IT solutions, we craft customized services that drive results and elevate your business to new heights. Our team of experts is dedicated to delivering innovative solutions tailored to your unique needs. We focus on quality, efficiency, and cutting-edge technology to ensure your success. Together, we'll transform your digital presence and achieve your business goals."
              </p>
              {/* <button
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn"
                style={{ backgroundColor: "#ab0000" }}
              >
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>  

      {/* <BrandsLogo /> */}
      {/* <Services /> */}
      {/* <Testimonial /> */}
      <div className="container mt-5">
        <div className="row">
          
          <div className="col-md-6">
            <div className="main_textt">
              <h1 className="Education">Education</h1>
              <h1 className="Automate_text">
                Automate Your Education
                <br />
                Process In Just A Few Clicks.
              </h1>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="school_software">
                  <p> + School Management Software</p>
                  <p> + College Management Software</p>
                  <p> + Coaching Management Software</p>
                  <p> + Learning Management System</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="school_software">
                  <p> + Online Examination Software</p>
                  <p> + Library Management Software</p>
                  <p> + Digital Notice Board</p>
                  <p> + Institute Mobile APP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ marginTop: "" }}>
              <img className="bloge_img" src={img3} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div className="main_about_icon">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="main_new_img">
                <img className="Technologies_img" src={img6} alt="" srcset="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="main_textt1">
                <h1 className="Automate_text1">Technologies we work with</h1>
                <h1 className="ourselves_text">
                  We have grown and adapted ourselves with <br /> the changes in
                  technology.
                </h1>
                <p className="platform_text">
                  We are extremely selective about the software, platform,
                  database, and framework choices we make for our products, and
                  for our client systems Our key solutions include domain
                  development, and support.Empowering your digital journey with
                  cutting-edge technologies,including React, Axios,
                  MongoDB,Express, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-7">
            <div className="main_textt13">
              <h1 className="Education">Drive Automation </h1>
              <h1 className="Automate_text">
                Streamline Your Driving Track
                <br />
                Process With Just A Few Clicks.
              </h1>

              <div className="row">
                <div className="col-md-4">
                  <div className="school_software">
                    <p> + Real-Time Tracking</p>
                    <p> + Automated Scheduling</p>
                    <p> + Geofencing Alerts</p>
                    <p> + Driver Monitoring</p>
                  </div>
                  {/* <div>
                  <botton className="button_free">Ask for a free demo</botton>
                </div> */}
                </div>

                <div className="col-md-4">
                  <div className="school_software">
                    <p> + Maintenance Reminders</p>
                    <p> + Fuel Management</p>
                    <p> + Comprehensive Reporting</p>
                    {/* <p> + Integration with Existing Systems</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div>
              <img
                className="bloge_img_new"
                src="https://www.vertexresearchcentre.com/assets/images/automated-4.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      

      <BlogsComp />
    </div>
  );
};

export default Hero;
