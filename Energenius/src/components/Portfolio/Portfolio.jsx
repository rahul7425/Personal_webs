import React, { useState } from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import supermoda from "../../assets/website/supermoda-web.png";
import ApnaPahnawa from "../../assets/PortfolioImages/apna-Pahnawa.png";
import mbitssolutions from "../../assets/PortfolioImages/mbitsolutions.png";
import nikhilportfolio  from "../../assets/PortfolioImages/nikhil-sharma.png";
import pinkcity from "../../assets/PortfolioImages/PINKCITY-DENTALCARE.png";
import visibleClick from "../../assets/PortfolioImages/visibleclick.png";
import Quickobook from "../../assets/PortfolioImages/QUICKOBOOK.png";
import  keendroidImage from "../../assets/PortfolioImages/KEENDROID-NEW-1.png";
import  keendroidPhoto from "../../assets/PortfolioImages/KEENDROID-NEW.png";
import bankingSecurity from "../../assets/PortfolioImages/banking-security.png";
import onlineGrocery from "../../assets/PortfolioImages/online-grocery.png";
import vms from "../../assets/PortfolioImages/vms.png";
import PatientCrm from "../../assets/PortfolioImages/patient-crm.png";
import vehiclesimulator from "../../assets/PortfolioImages/vehicle--simulator.png";
import dataLogger from "../../assets/PortfolioImages/data-logger.png";
import oval from '../../assets/PortfolioImages/oval.png';
import onlinePharmecy from "../../assets/PortfolioImages/online-pharmecy.png";
const projectData = [
  // {
  //   title: "Home Alert Solutions",
  //   category: ["IOT"],
  //   image: oval,
  //   type: "OVAL",
  //   url: "https://www.meetoval.com/products/ovalsensor"
  // },

  {
    title: "School ERP",
    category: ["Web Development",],
    image: keendroidImage,
    type: "",
    url: "https://keendroid.in/"
  },

  {
    title: "Transport Management Solutions",
    category: ["Web Development"],
    image: supermoda,
    type: "",
    url: ""
  },
  {
    title: "Child Tracking Solutions",
    category: ["Web Development"],
    image: keendroidPhoto,
    type: "Safety and Security",
    url: ""
  },
  // {
  //   title: "Banking Security",
  //   category: ["IOT"],
  //   image: bankingSecurity,
  //   type: "",
  //   url: "https://www.qualitronix.com/"
  // },
  // {
  //   title: "Vaccine Management",
  //   category: ["IOT"],
  //   image: supermoda,
  //   type: "",
  //   url: ""
  // },
  // {
  //   title: "Vehicle Security Solutions",
  //   category: ["IOT"],
  //   image: vehiclesimulator,
  //   type: "",
  //   url: ""
  // },
  {
    title: "Quickobook",
    category: ["Web Development"],
    image: Quickobook,
    type: "Online Doctor Booking Solutions",
    url: "https://www.quickobook.com/"
  },
  // {
  //   title: "Online Pharmacy",
  //   category: ["Web Development", "App Development", "UI/UX Design"],
  //   image: onlinePharmecy,
  //   type: "",
  //   url: "https://pharmacy.quickobook.com/"
  // },
  // {
  //   title: "Patient CRM",
  //   category: ["Web Development", "App Development", "UI/UX Design"],
  //   image: PatientCrm,
  //   type: "",
  //   url: "https://connect.quickobook.com/"
  // },
  // {
  //   title: "Online Grocery",
  //   category: ["Mobile Application"],
  //   image: onlineGrocery,
  //   type: "",
  //   url: "https://goofreshy.com/"
  // },
  // {
  //   title: "Online Home Service Solutions",
  //   category: ["App Development", "UI/UX Design"],
  //   image: supermoda,
  //   type: "",
  //   url: ""
  // },
  
  // {
  //   title: "GPS",
  //   category: ["IOT"],
  //   image: supermoda,
  //   type: "",
  //   url: ""
  // },
  // {
  //   title: "Visitor Management Solutions",
  //   category: ["IOT"],
  //   image: vms,
  //   type: "",
  //   url: ""
  // },
  // {
  //   title: "Vehicle Fleet Management",
  //   category: ["Web Development", "App Development", "UI/UX Design"],
  //   image: supermoda,
  //   type: "",
  //   url: ""
  // },
  // {
  //   title: "Learning Management Solutions",
  //   category: ["Web Development", "App Development", "UI/UX Design"],
  //   image: supermoda,
  //   type: "LMS",
  //   url: ""
  // },
  {
    title: "Data Logger",
    category: ["Web Development", "IOT"],
    image: dataLogger,
    type: "software",
    url: ""
  },
  // {
  //   title: "Vehicle Simulator",
  //   category: ["IOT"],
  //   image: vehiclesimulator,
  //   type: "Vehicle Tracing Software",
  //   url: ""
  // },
  {
    title: "Driving Track Automation",
    category: ["IOT"],
    image: supermoda,
    type: "Real Estate",
    url: ""
  },
  // {
  //   title: "Online Betting",
  //   category: ["App Development"],
  //   image: supermoda,
  //   type: "",
  //   url: ""
  // },
  {
    title: "Apna Pahnawa",
    category: ["Web Development", "IOT"],
    image: ApnaPahnawa,
    type: "",
    url: "https://apnapahnawa.com/"
  },
  // {
  //   title: "Visible Click",
  //   category: ["Web Development", "IOT"],
  //   image: visibleClick,
  //   type: "Digital Marketing Agency",
  //   url: "https://www.visibleclick.in/"
  // },
  //PINKCITY DENTALCARE
  // {
  //   title: "PINKCITY DENTALCARE",
  //   category: ["Web Development"],
  //   image: pinkcity,
  //   type: "Dental Treatment",
  //   url: "https://pinkcitydentalcare.com/"
  // },
  // {
  //   title: "Nikhil Sharma",
  //   category: ["Web Development"],
  //   image: nikhilportfolio,
  //   type: "Self Portfolio",
  //   url: "https://thenikhilsharma.in/"
  // },
  {
    title: "MB IT Solutions",
    category: ["Web Development"],
    image: mbitssolutions,
    type: "IT Agency",
    url: ""
  },

];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectData
    : projectData.filter(project => project.category.includes(selectedCategory));

  return (
    <>
      <section>
        <div className="main_hero_img">
          <div className="main_hero_headding">
            <h1 className="solutions_headding">
              We don’t just deliver digital solutions
              <br />
              Explore our diverse portfolio of projects.
            </h1>
            <p className="hero_peregrap_1">
              Each one is a testament to our commitment to quality and innovation
              <br />
            </p>
            <p className="hero_peregrap_1 mt-4">Our Achievements in Action</p>
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
            Our Portfolio
          </h1>
          <div className="main_portfolio">
            <ul className="d-flex">
              {["All", "UI/UX Design", "Web Development", "App Development", "IOT"].map(category => (
                <li key={category}>
                  <button onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div className="col-md-4" key={index}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="main_part_portfolio text-center">
                    <h1 className="sm_supermod">{project.title}</h1>
                    <h6 className="real_es">{project.type}</h6>
                    <img className="img_supermoda" src={project.image} alt={project.title} />
                    <h5 className="we_sikel">{project.category.join(', ')}</h5>
                    <div className="main_button_more d-felx">
                    <button className="red_more12">read More</button>
                    <button className="red_more12">read More</button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
