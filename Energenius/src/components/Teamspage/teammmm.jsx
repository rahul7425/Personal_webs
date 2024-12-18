import React from "react";
import "./team.css";
import vivek from "../../assets/website/vivek.jpg";
import tarun from "../../assets/website/tarun.jpg";
// import pp from "../../assets/website/pp.jpg";
import lucky from "../../assets/website/1000018263.jpg";
import dummy from "../../assets/website/dummy.jpeg";
import Hitesh from "../../assets/website/Hitesh.jpg";
// import Shivam from "../../assets/website/subham.jpg";
// import chandan from "../../assets/website/chandan.jpg";

function Team() {
  return (
    <div className="team-seaction">
      <div className="containers">
        <div className="roww">
          <div className="titlee">
            <h2 className="our_tem1">Our Team</h2>
            <h1 >Meet Our Passionate Team</h1>
            <p>
              Our Exceptionally Talented And Excellent Team Deliver Great <br />{" "}
              Outcomes For Your Business.
            </p>
          </div>
          <div className="team_row">
            <div className="profile_box">
              <h4>Mr. Dhram Jain</h4>
              <h5>CTO</h5>
              <img src={dummy} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>Chief Technology Officer with over a decade of experience, bringing unparalleled expertise to drive innovation and growth for our company.</p>
            </div>
            <div className="profile_box">
              <h4>Mr. Mayank Yadav</h4>
              <h5>Founder</h5>
              <img src={dummy} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>As the founder of our company, I'm dedicated to driving forward-thinking strategies and fostering a culture of creativity and collaboration. With a relentless pursuit of excellence, I'm committed to shaping the future of our industry through visionary leadership and impactful innovation.





</p>
            </div>
            <div className="profile_box">
              <h4>Mr. Mahesh Gitala</h4>
              <h5>BDA</h5>
              <img src={dummy} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>Dynamic BDA adept at uncovering new business opportunities and fostering strategic partnerships. Proficient in market analysis and relationship-building to drive sustained growth and expansion.</p>
            </div>
            <div className="profile_box">
              <h4>Mr. Ashish Maru</h4>
              <h5>Sr. Android Developer</h5>
              <img src={dummy} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>keendroid cto is djdj djdjd djdjd djdjdjd djdjdj</p>
            </div>
          </div>
          <div className="team_row">
          <div className="profile_box">
              <h4> Mr. Vivek Jangir</h4>
              <h5>Mern Stack Developer</h5>
              <img src={vivek} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>
Talented MERN Stack Developer proficient in building robust, full-stack web applications. Skilled in utilizing MongoDB, Express.js, React.js, and Node.js to deliver scalable and efficient solutions</p>
            </div>
           
            <div className="profile_box">
              <h4>Mr. Tarun Khator</h4>
              <h5> Android Developer</h5>
              <img src={tarun} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>Junior Android Developer eager to contribute innovative solutions and learn from experienced professionals. Proficient in Java and Kotlin, with a passion for creating user-friendly mobile applications.</p>
            </div>
            <div className="profile_box">
              <h4>Mr. Rajayvardhan</h4>
              <h5>MERN stack developer</h5>
              <img src={lucky} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>
As a Junior MERN Stack Developer, I bring enthusiasm and a strong foundation in web development technologies. Eager to expand skills in MongoDB, Express.js, React.js, and Node.js to contribute to dynamic projects.</p>
            </div>
            <div className="profile_box">
              <h4>Mr. Hitesh Sharma</h4>
              <h5>Web Developer-intern</h5>
              <img src={Hitesh} alt="" />
              <div className="social_box">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
              </div>
              <p>Junior Web Developer with a keen eye for detail and a passion for creating responsive, user-friendly websites. Proficient in HTML, CSS, and JavaScript, eager to learn and grow within a collaborative team environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
