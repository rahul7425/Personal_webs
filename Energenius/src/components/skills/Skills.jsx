import React from "react";
import "./skill.css";
import img1 from "../../assets/website/WhatsApp Image 2024-05-12 at 12.38.48_373117c7.png";
import img2 from "../../assets/website/WhatsApp Image 2024-05-12 at 18.38.26_74f44f28.jpg";
import img3 from "../../assets/website/WhatsApp Image 2024-05-12 at 18.41.20_77187cf3.jpg";
import img4 from "../../assets/website/WhatsApp Image 2024-05-12 at 18.42.52_660b948d.jpg";
import img5 from "../../assets/website/WhatsApp Image 2024-05-12 at 18.45.33_d4231f2c.jpg";


function Skills() {
  return (
    <>
      <section className="main_pat_background">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="about_new1">
                <img src={img5} alt="" srcset="" className="img_icon" />

                <h2 className="Performance">
                  <h1>
                    <b>High Performance</b>
                  </h1>
                </h2>
                <p className="customers">
                  We are offering all best services to our customers on time.We
                  Complete all tasks in web development.
                  .
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about_new1">
                <img src={img1} alt="" srcset="" className="img_icon" />
                <h2 className="Performance">
                  <h1>
                    <b>Legendary Support</b>
                  </h1>
                </h2>
                <p className="customers">
                  For customers or clients our team
                  always ready to ensure all 
                  queries and make solution
                   as soon as possible.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about_new1 ">
                <img src={img2} alt="" srcset="" className="img_icon" />

                <h2 className="Performance">
                  <h1>
                    <b> Security</b>
                  </h1>
                </h2>
                <p className="customers">
                  To make trust in the front of our 
                  Clients we make all transactions and 
                  works in Development and Designing 
                
                </p>
              </div>
            </div>
          </div>
          <div className="background_aboutt">
            <div className="row">
              <div className="col-md-4">
                <div className="about_new1">
                  <img src={img3} alt="" srcset="" className="img_icon" />

                  <h2 className="Performance">
                    <h1>
                      <b>Business Sustainability</b>
                    </h1>
                  </h2>
                  <p className="customers">
                    We specialize in fostering business
                    <br /> sustainability for individuals
                    <br />, startups, and corporate
                    <br /> organizations alike
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about_new1">
                  <img src={img4} alt="" srcset="" className="img_icon" />

                  <h2 className="Performance">
                    <h1>
                      <b>Best Results</b>
                    </h1>
                  </h2>
                  <p className="customers">
                    Our development teams always
                    <br /> ready to implement latest
                    <br /> technology to give best <br />
                    result to our customers.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about_new1">
                  <img src={img5} alt="" srcset="" className="img_icon" />

                  <h2 className="Performance">
                    <h1>
                      <b>Business Growth</b>
                    </h1>
                  </h2>
                  <p className="customers">
                    Our development teams always <br />
                    ready to implement latest <br />
                    technology to give best
                    <br /> result to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="Work">Our Work Process</h1>
          <div className="row">
            <div className="col-md-6">
              {/* <div className="about_imgn1"> */}
                {/* <img
                  className="gif_img"
                  src="https://objectsquare.com/assets/images/work-progress.gif"
                  alt="work-progress"
                /> */}
              {/* </div> */}
            </div>
            <div className="col-md-6">
              <div className="about_imgn12">
                <h1 className="Get_text">Get Aim</h1>
                <div className="line"></div>
                <p className="menu_peregrap">
                  At Object Square the Customers always having priority to us.
                  For them Business Growth we are providing complete solution in
                  every Edge.
                </p>
                <h1 className="Get_text">Desinging and Development</h1>
                <div className="line"></div>

                <p className="menu_peregrap">
                  Before starting Web Development and have to
                  plan how to start work according to customer need. Our expert
                  team trained in varioustechnologies Node, React StartWebsite Design
                  with great User Interface.
                </p>

                {/* <h1 className="Get_text">Digital Marketing/SEO/SMO</h1>
                <div className="line"></div>

                <p className="menu_peregrap">
                  To increase Customer Business this Techoncopacitic Solution
                  also works on Digital Marketing and analyzes results for
                  business growth of Customer. To improve results on various
                  searches Engine we are also complete several tasks on SEO and
                  SMO.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <h4 className="team-heading">Our Team Members</h4>
        <div className="slider-container ">
          <div class="cards">
            <img
              src=""
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Dharam Jain</h1>
            <p class="title">CEO & Founder</p>
          </div>

          <div class="cards">
            <img
              src=""
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Mayank Yadav</h1>
            <p class="title">Co-founder</p>
          </div>

          <div class="cards">
            <img
              src={mahesh}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Mahesh Ghitala</h1>
            <p class="title">BDA</p>
          </div>

          <div class="cards">
            <img
              src={img6}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Lokesh Yadav</h1>
            <p class="title">BDA</p>
          </div>

          <div class="cards">
            <img
              src={Gopal}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Gopal Choudhary</h1>
            <p class="title">HR</p>
          </div>

          <div class="cards">
            <img
              src={vivek}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Vivek jangir</h1>
            <p class="title">Web-Developer(Mernstack)</p>
          </div>

          <div class="cards">
            <img
              src={tarun}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Tarun khator</h1>
            <p class="title">Android-Developer</p>
          </div>
          <div class="cards">
            <img
              src={lucky}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Rajayvardhan </h1>
            <p class="title">Backend-Developer(Node)</p>
          </div>
          <div class="cards">
            <img
              src={pp}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Permanand Kumawat</h1>
            <p class="title">Web & Graphic Designer</p>
          </div>
          <div class="cards">
            <img
              src={chandan}
              alt="John"
              style={{ width: "100%", height: "40vh", borderRadius: "20PX" }}
            />
            <h1>Mr.Chandan Sharma</h1>
            <p class="title">SEO Executive</p>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Skills;
