import React from "react";
import "./Iot.css";
import { Link } from "react-router-dom";
import IOT1 from "../../../assets/image/iot-project-planning1.png";
import IOT2 from "../../../assets/image/iot-project-planning2.png";
import IOT3 from "../../../assets/image/iot-project-planning3.png";
import IOT4 from "../../../assets/image/iot-project-planning4.png";
import IOT5 from "../../../assets/image/why-choose-us-banner.png";
import IOT6 from "../../../assets/image/most-popular-backend-frameworks.jpg";
import IOT7 from "../../../assets/image/Website-Redesign1.png";
import IOT8 from "../../../assets/image/9Eyz9YLH5QJ3xqeBrrFV5G2.jpg";
import IOT9 from "../../../assets/image/Vector01.png";

const WebDesign = () => {
  return (
    <>
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

      <section>
        <div className="main_part_webdesign">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="main_part_webdesign1">
                  <p className="web_text">
                    At PSSPL, we specialize in providing IoT development
                    services designed to develop high-ROI IoT solutions and
                    formulate cohesive architectures for network-connected
                    devices, data processing layers, and applications.
                    At PSSPL, we specialize in providing IoT development
                    services designed to develop high-ROI IoT solutions and
                    formulate cohesive architectures for network-connected
                    devices, data processing layers, and applications.
                    devices, data processing layers, and applications.
                    At PSSPL, we specialize in providing IoT development
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="">
                  <img className="img_providing" src={IOT7} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             <div>
                <img className="img_demands" src={IOT8} alt="" srcset="" />
             </div>
            </div>

            <div className="col-md-6">
              <div>
              <div className="Unlock_text">
                <h1 className="new_webdesig_text">
                  Unlock the Future with Our
                  <br />{" "}
                  <span className="text_span">IoT Development Services!</span>
                </h1>
              </div>
                <p className="one-stop_text">
                  We provide a broad range of services to match your IoT
                  demands,
                  <br /> making us your one-stop shop for IoT development.
                </p>
                <p className="whether_text">
                  We have the know-how to produce exceptional results whether
                  <br /> you're seeking for IoT development, consultancy, or IoT
                  app <br /> development services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="Consulting_text">
            <h1 className="Services_web_text">Our IoT Consulting Services</h1>
            <p className="journey_peregrap">
              Whether you’re at the beginning of your IoT journey or well into
              it, our IoT consultants are here to ensure you maximize the
              potential of <br /> emerging technologies and align them
              seamlessly with your business strategy.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="webdesign_card text-center">
                <img className="icone_img" src={IOT1} alt="" srcset="" />
                <h1 className="webdesign_hadding">IoT Project Planning</h1>
                <p className="establish_peegrap">
                  In our IoT project planning, we define scope, estimate time
                  and budget, identify skills, assess risks, and establish data
                  security measures. This holistic approach to IoT project
                  planning guarantees a well-prepared and risk-mitigated path to
                  project implementation.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="webdesign_card text-center">
                <img className="icone_img" src={IOT2} alt="" srcset="" />
                <h1 className="webdesign_hadding">IoT Project Planning</h1>
                <p className="establish_peegrap">
                  In our IoT project planning, we define scope, estimate time
                  and budget, identify skills, assess risks, and establish data
                  security measures. This holistic approach to IoT project
                  planning guarantees a well-prepared and risk-mitigated path to
                  project implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="webdesign_card text-center">
                <img className="icone_img" src={IOT1} alt="" srcset="" />
                <h1 className="webdesign_hadding">IoT Project Planning</h1>
                <p className="establish_peegrap">
                  In our IoT project planning, we define scope, estimate time
                  and budget, identify skills, assess risks, and establish data
                  security measures. This holistic approach to IoT project
                  planning guarantees a well-prepared and risk-mitigated path to
                  project implementation.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="webdesign_card text-center">
                <img className="icone_img" src={IOT2} alt="" srcset="" />
                <h1 className="webdesign_hadding">IoT Project Planning</h1>
                <p className="establish_peegrap">
                  In our IoT project planning, we define scope, estimate time
                  and budget, identify skills, assess risks, and establish data
                  security measures. This holistic approach to IoT project
                  planning guarantees a well-prepared and risk-mitigated path to
                  project implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="main_web_contact">
          <div className="web_design_text12">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="Consulting_text">
                    Need help with IoT
                    <br /> Consulting Services?
                  </h1>
                </div>
                <div className="col-md-6">
                  <button className="button_message">
                    Let’s talk — Send a message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="Engagement_text">Our Engagement Models</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="webdesign_card text-center">
                <h1 className="webdesign_hadding">Time & Material</h1>
                <p className="establish_peegrap">
                  In our IoT project planning, we define scope, estimate time
                  and budget, identify skills, assess risks, and establish data
                  security measures. This holistic approach to IoT project
                  planning guarantees a well-prepared and risk-mitigated path to
                  project implementation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="webdesign_card text-center">
                <h1 className="webdesign_hadding">Fixed Price</h1>
                <p className="establish_peegrap">
                  In our IoT project planning, we define scope, estimate time
                  and budget, identify skills, assess risks, and establish data
                  security measures. This holistic approach to IoT project
                  planning guarantees a well-prepared and risk-mitigated path to
                  project implementation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="webdesign_card text-center">
                <h1 className="webdesign_hadding">Staff Augmentation</h1>
                <p className="establish_peegrap">
                  In our IoT project planning, we define scope, estimate time
                  and budget, identify skills, assess risks, and establish data
                  security measures. This holistic approach to IoT project
                  planning guarantees a well-prepared and risk-mitigated path to
                  project implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="main_resource">
            <div className="row">
              <div className="col-md-6">
                <h1 className="Want_hire">
                  Want to hire a resource to work
                  <br /> with you?
                </h1>
              </div>

              <div className="col-md-6">
                <button className="button_contact"> Contact US</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="Choose_our">
            <div className="row">
              <div className="col-md-6">
                <img className="Consulting_img" src={IOT9} alt="" srcset="" />
              </div>

              <div className="col-md-6">
                <h1 className="deliver_text">
                  Why Choose our Iot <br /> Consulting Services?
                </h1>
                <p className="strategic_for">
                  These services can help you deliver tailored solutions for
                  seamless
                  <br /> connectivity and strategic IoT implementation.{" "}
                </p>

                <div>
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the
                          second item's accordion body. Let's imagine this being
                          filled with some actual content.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="Latest_Blogs">Latest Blogs</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="blogs_card">
                <img className="blogs_img" src={IOT6} alt="" srcset="" />
                <button className="SOFTWARE_button">SOFTWARE</button>
                <h1 className="Backend_bloge">
                  Top Ten Most Popular Backend Frameworks
                </h1>
                <p className="routing_bloge">
                  {" "}
                  In web development, backend frameworks are essential because
                  they simplify operations like routing, database management,
                  and server configuration. These frameworks
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="blogs_card">
                <img className="blogs_img" src={IOT6} alt="" srcset="" />
                <button className="SOFTWARE_button">SOFTWARE</button>
                <h1 className="Backend_bloge">
                  Top Ten Most Popular Backend Frameworks
                </h1>
                <p className="routing_bloge">
                  {" "}
                  In web development, backend frameworks are essential because
                  they simplify operations like routing, database management,
                  and server configuration. These frameworks
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="blogs_card">
                <img className="blogs_img" src={IOT6} alt="" srcset="" />
                <button className="SOFTWARE_button">SOFTWARE</button>
                <h1 className="Backend_bloge">
                  Top Ten Most Popular Backend Frameworks
                </h1>
                <p className="routing_bloge">
                  {" "}
                  In web development, backend frameworks are essential because
                  they simplify operations like routing, database management,
                  and server configuration. These frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </>
  );
};
export default WebDesign;
