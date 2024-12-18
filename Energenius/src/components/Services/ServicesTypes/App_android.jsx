import React from "react";
import "./App_android.css";
import { Link } from "react-router-dom";
import Android1 from "../../../assets/image/Android-App1.jpg";
import Android2 from "../../../assets/image/Android-App2.jpg";
import Android3 from "../../../assets/image/Android-App3.jpg";
import Android4 from "../../../assets/image/Android-App4.jpg";
import Androidimg1 from "../../../assets/image/Android-img1.jpg";
import Androidimg2 from "../../../assets/image/Android-img2.jpg";
import Androidimg3 from "../../../assets/image/Android-img3.jpg";
import Androidimg4 from "../../../assets/image/Android-img4.jpg";
import Androidimg5 from "../../../assets/image/Android-img5.jpg";
import Androidimg6 from "../../../assets/image/Android-img6.jpg";
import phone1 from "../../../assets/image/phone1.jpg";
import phone2 from "../../../assets/image/phone2.jpg";
import phone3 from "../../../assets/image/phone3.jpg";
import phone4 from "../../../assets/image/phone4.jpg";
import AIML1 from "../../../assets/image/AI-ML-1.jpg";
import AIML2 from "../../../assets/image/AI-ML-2.jpg";
import AIML3 from "../../../assets/image/AI-ML-3.jpg";
import AIML4 from "../../../assets/image/AI-ML-4.jpg";
import IOT6 from "../../../assets/image/most-popular-backend-frameworks.jpg";

const App_android = () => {
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
        <div className="container">
          <h1 className="Android_app_hadding">
            Get Cutting-edge Android App Development Services Across All
            Platforms
          </h1>
          <p className="Android_app_peregrap">
            As a leading Android app development company, we have expertise in
            delivering custom apps across various Android devices and platforms.
          </p>

          <div className="row">
            <div className="col-md-3">
              <div className="aap_android_card">
                <img
                  className="Android_image"
                  src={Android1}
                  alt=""
                  srcset=""
                />
                <h1 className="Custom_text">Custom Android App</h1>
              </div>
            </div>

            <div className="col-md-3">
              <div className="aap_android_card">
                <img
                  className="Android_image"
                  src={Android2}
                  alt=""
                  srcset=""
                />
                <h1 className="Custom_text">Android Wearable App</h1>
              </div>
            </div>

            <div className="col-md-3">
              <div className="aap_android_card">
                <img
                  className="Android_image"
                  src={Android3}
                  alt=""
                  srcset=""
                />
                <h1 className="Custom_text">Android Tablet App</h1>
              </div>
            </div>

            <div className="col-md-3">
              <div className="aap_android_card">
                <img
                  className="Android_image"
                  src={Android4}
                  alt=""
                  srcset=""
                />
                <h1 className="Custom_text">Android Smart TV App</h1>
              </div>
            </div>
          </div>

          <button className="Android_Apps_button">
            Get Custom Android Apps
          </button>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="Services_aap_hadding">
            Our Android App Development Services
          </h1>
          <p className="unicorn_peregrap">
            Whether you are a unicorn startup or a leading enterprise, our
            end-to-end Android app development services have got you covered!
          </p>

          <div className="row">
            <div className="col-md-6">
              <div className="Consulting_card">
                <h1 className="Development_app_hadding">
                  App Development Consulting
                </h1>
                <p className="scalability_peregrap">
                  As a leading Android app development company, we ensure
                  scalability with expertise in everything related to Android
                  app development. Whether selecting the right tools and
                  technologies or framing an effective app development strategy,
                  we offer full-scale app development consulting services.
                </p>
                <div>
                  <h1 className="Analysis_1text mt-4">
                    <i class="fa-solid fa-check"></i>Business Requirement
                    Analysis{" "}
                  </h1>
                  <h1 className="Analysis_1text mt-4">
                    <i class="fa-solid fa-check"></i>Market and Competitor
                    Analysis{" "}
                  </h1>
                  <h1 className="Analysis_1text mt-4">
                    <i class="fa-solid fa-check"></i>Proof-of-Concept Service{" "}
                  </h1>
                  <h1 className="Analysis_1text mt-4">
                    <i class="fa-solid fa-check"></i>Digital Transformation
                    Consulting{" "}
                  </h1>
                </div>
                <button className="app_nutton_get">Get Started</button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="Consulting_card">
                <img
                  className="Androidimg1_img"
                  src={Androidimg1}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main_aap_newcard">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Consulting_card">
                <img
                  className="Androidimg1_img"
                  src={Androidimg2}
                  alt=""
                  srcset=""
                />
              </div>
            </div>

          <div className="col-md-6">
            <div className="Consulting_card">
              <h1 className="Development_app_hadding">
              Android App UI/UX Design
              </h1>
              <p className="scalability_peregrap">
              Our experts can help you develop custom Android apps with impeccable UI/UX architecture and creative designs for businesses in different industries. You get solid and scalable apps that offer memorable user experience across all Android devices and the latest versions.
              </p>
              <div>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>App Architecture Designing {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>UI/UX Consulting {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>MVP Development {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>App UI/UX Designing Services{" "}
                </h1>
              </div>
              <button className="app_nutton_get">Get Started</button>
            </div>
          </div>
        </div>
         </div>
      </section>

      <section className="main_aap_newcard">
        <div className="container">
          <div className="row">
            

          <div className="col-md-6">
            <div className="Consulting_card">
              <h1 className="Development_app_hadding">
              Android App Development
              </h1>
              <p className="scalability_peregrap">
              Our talented Android developers can elevate your app development strategy by strengthening viable solutions and building custom Android apps that add unmatched value to your brand. Get business, IPTV, healthcare, travel, and other apps by partnering with us for Android app development.
              </p>
              <div>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Custom App Development  {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>API Integration Service  {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Android Widget Development  {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Technology Consulting Service{" "}
                </h1>
              </div>
              <button className="app_nutton_get">Get Started</button>
            </div>
          </div>

          <div className="col-md-6">
              <div className="Consulting_card">
                <img
                  className="Androidimg1_img"
                  src={Androidimg3}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
        </div>

         </div>
      </section>


      <section className="main_aap_newcard">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Consulting_card">
                <img
                  className="Androidimg1_img"
                  src={Androidimg4}
                  alt=""
                  srcset=""
                />
              </div>
            </div>

          <div className="col-md-6">
            <div className="Consulting_card">
              <h1 className="Development_app_hadding">
              Testing and Deployment
              </h1>
              <p className="scalability_peregrap">
              Whether you are launching an Android app for tablets, wearable devices, or smart TVs, we ensure a seamless user experience and performance across various Android devices and platforms. We offer our clients end-to-end testing and deployment services for a smooth app development process.
              </p>
              <div>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>App Testing Services {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Security Testing Services  {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Play Store Optimization Services  {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Cloud Integration Services{" "}
                </h1>
              </div>
              <button className="app_nutton_get">Get Started</button>
            </div>
          </div>
        </div>
         </div>
      </section>


      <section className="main_aap_newcard">
        <div className="container">
          <div className="row">
            

          <div className="col-md-6">
            <div className="Consulting_card">
              <h1 className="Development_app_hadding">
              Android App Porting Services
              </h1>
              <p className="scalability_peregrap">
              Our team of app development experts is seasoned to port your iOS or other applications to custom Android apps having the latest features and aesthetic design. Migrate your existing app to the Android platform via our top-notch Android app porting services and gain better revenues.
              </p>
              <div>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>App Porting Services   {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Data Migration Service  {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Tech Stack Intraporting   {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Web to App Development{" "}
                </h1>
              </div>
              <button className="app_nutton_get">Get Started</button>
            </div>
          </div>

          <div className="col-md-6">
              <div className="Consulting_card">
                <img
                  className="Androidimg1_img"
                  src={Androidimg5}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
        </div>

         </div>
      </section>

      <section className="main_aap_newcard">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Consulting_card">
                <img
                  className="Androidimg1_img"
                  src={Androidimg6}
                  alt=""
                  srcset=""
                />
              </div>
            </div>

          <div className="col-md-6">
            <div className="Consulting_card">
              <h1 className="Development_app_hadding">
              Support and Maintenance
              </h1>
              <p className="scalability_peregrap">
              As a professional Android app development company, we make sure that your custom app remains in synch with the latest market trends. You can update and add new features, test your app, and migrate to a newer technology using our Android app support and maintenance services.
              </p>
              <div>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Technology Migration {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Features Update  {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>UI/UX Enhancement   {" "}
                </h1>
                <h1 className="Analysis_1text mt-4">
                  <i class="fa-solid fa-check"></i>Testing and Maintenance {" "}
                </h1>
              </div>
              <button className="app_nutton_get">Get Started</button>
            </div>
          </div>
        </div>
         </div>
      </section>

      <section>
        <div className="main_part_backguound_aap">
            <div className="Android_appcost">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="Matellio_card">
                                <h1 className="form_aap">How Much Does Android<br/> App Development Cost?</h1>
                                <form>
                                    <input type="text" placeholder="Name" className="name_input"/><br/><br/>
                                    <input type="email" placeholder="Name" className="name_input"/><br/><br/>
                                    <input type="phone" placeholder="Name" className="name_input"/><br/><br/>
                                    <input type="text" placeholder="Name" className="name_input"/><br/><br/>
                                    <button className="Submit_Inquiry">Submit Inquiry</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="Matellio_card1">
                                <h1 className="Matellio_new_text">Why Matellio for Android App<br/> Development?</h1>
                                <div className="stand_keeps">
                                <h1 className="Innovative_text">Innovative Approach</h1>
                                <p className="talented_peregrap">Our talented R&D team always keeps up with the latest market trends to offer Android apps that stand out from the crowd.</p>
                                </div>
                                <div className="stand_keeps">
                                <h1 className="Innovative_text">Flexible Hiring Models</h1>
                                <p className="talented_peregrap">We offer a wide range of hiring models and needs-based scaling services to help our clients with cost-effective Android app development.</p>
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
            <h1 className="Stories_text">Our Success Stories</h1>
            <p className="projects_peregrap">Our talented developers have successfully delivered projects to businesses ranging from startups and enterprises to Fortune 500 companies.</p>
            <div className="row">
                <div className="col-md-3">
                    <div className="block_card1">
                        <img className="phone1_img" src={phone1} alt="" srcset="" />
                        <h1 className="Management_hadding">IoT Heat Management Solution</h1>
                        <button className="Read_more)1button">Read More</button>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="block_card1">
                        <img className="phone1_img" src={phone2} alt="" srcset="" />
                        <h1 className="Management_hadding">Hot Spot</h1>
                        <button className="Read_more)1button">Read More</button>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="block_card1">
                        <img className="phone1_img" src={phone3} alt="" srcset="" />
                        <h1 className="Management_hadding">Digital Assessment Tool</h1>
                        <button className="Read_more)1button">Read More</button>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="block_card1">
                        <img className="phone1_img" src={phone4} alt="" srcset="" />
                        <h1 className="Management_hadding">Vox Populi</h1>
                        <button className="Read_more)1button">Read More</button>
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

    

      <section>
        <div className="container">
          <div className="main_bFrequently">
            <div>
              <div class="accordion accordion-flush" id="accordionFlushExample">
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the second item's accordion body. Let's imagine
                      this being filled with some actual content.
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
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default App_android;
