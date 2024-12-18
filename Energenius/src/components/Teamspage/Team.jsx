import React from "react";
import "./team.css";
import vivek from "../../assets/website/vivek.jpg";
import tarun from "../../assets/website/tarun.jpg";
import pp from "../../assets/website/pp.jpg";
import lucky from "../../assets/website/lucky.jpg";
import dummy from "../../assets/website/dummy.jpeg";
import Hitesh from "../../assets/website/Hitesh.jpg";
import Shivam from "../../assets/website/subham.jpg";
import chandan from "../../assets/website/chandan.jpg";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="home-container">
      <h1 style={{fontWeight:"700",fontSize:"30px"}}>OUR PASSIONATE TEAM</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px",width:"100%", justifyContent:"center" }}>


        <div className="profile-card">
          <div className="img">
            <img src={dummy} />
          </div>
          <div className="caption">
            <h3>KAPIL</h3>
            <p>Android Developer</p>
            <div className="social-links">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={dummy} />
          </div>
          <div className="caption">
            <h3>RAHUL</h3>
            <p>Frontend-devloper</p>
            <div className="social-links">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
        </div>

      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "5vw", width:"100%", justifyContent:"center"}}>
        <div className="profile-card">
          <div className="img">
            <img src={lucky} />
          </div>
          <div className="caption">
            <h3>Rajayvardhan</h3>
            <p>Mern-Stack Developer</p>
            <div className="social-links">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={dummy} />
          </div>
          <div className="caption">
            <h3>Chandan</h3>
            <p>Digital-Marketer</p>
            <div className="social-links">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={dummy} />
          </div>
          <div className="caption">
            <h3>Anil</h3>
            <p>Php Developer</p>
            <div className="social-links">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={dummy} />
          </div>
          <div className="caption">
            <h3>Parkash</h3>
            <p>Node-jsDeveloper</p>
            <div className="social-links">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
          </div>
        </div>
      </div>
      
    </div>


  );
}

export default Team;
