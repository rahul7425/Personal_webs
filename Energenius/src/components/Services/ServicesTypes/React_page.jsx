import React from 'react'
import "./React_page.css";
import { Link } from "react-router-dom";
import React1 from "../../../assets/image/react1.svg";
import React2 from "../../../assets/image/react2.svg";
import React3 from "../../../assets/image/react3.svg";
import React4 from "../../../assets/image/react4.webp";
import React5 from "../../../assets/image/react_1.webp";
import React6 from "../../../assets/image/react_2.webp";
import React7 from "../../../assets/image/react_3.webp";
import IOT6 from "../../../assets/image/most-popular-backend-frameworks.jpg";

 const React_page = () => {
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
    <div className='container'>
        <h1 className='React_hadding'>REACT JS DEVELOPMENT SERVICES</h1>
        <p className='React_peregrap'>Looking for a React JS development company that can meet your quality expectations? Waverley’s React development team can tackle any scale project on any continent, in any time zone, on your timeline.</p>
    </div>
  </section>

  <section className='PICK_YOUR_card'>
    <div className='container'>
        <h1 className='PICK_1hadding'>PICK YOUR REACT DEVELOPMENT MODEL</h1>
        <p className='PICK_1peregrap'>With Waverley, you can choose the engagement model that works best for your software development needs.</p>

        <div className='row'>
            <div className='col-md-4'>
                <div className='react_card'>
                    <img className='React1_img1' src={React1} alt="" srcset="" />
                    <h1 className='Dedicated_hadding'>Dedicated React Development Team</h1>
                    <p className='Dedicated_peregrap'>Outsource React development to our team of software engineers working on a specific part of your project.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='react_card'>
                    <img className='React1_img2' src={React2} alt="" srcset="" />
                    <h1 className='Dedicated_hadding'>Enterprise React Development</h1>
                    <p className='Dedicated_peregrap'>Quickly build a global team of 3-100 React developers and other tech specialists to create a large-scale system.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='react_card'>
                    <img className='React1_img1' src={React3} alt="" srcset="" />
                    <h1 className='Dedicated_hadding'>React-based Product Development</h1>
                    <p className='Dedicated_peregrap'>Order full-cycle React development services to build your software product from scratch or transfer your existing software development.</p>
                </div>
            </div>
        </div>
    </div>
  </section>

  <section>
    <div className='container'>
        <h1 className='React_hadding'>REACT JS DEVELOPMENT SERVICES WE OFFER</h1>
        <p className='React_peregrap'>Waverley is a React.js software development company that can satisfy a wide array of customer needs for versatile React development services.</p>

        <div className='row'>
           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>Web App Development</h1>
                <p className='robust1_peregrap'>Our React.js developers build robust web applications, portals, and websites with rich functionality and impeccable performance.</p>
            </div>
           </div>

           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>UI/UX design</h1>
                <p className='robust1_peregrap'>Using React JS, we design and create beautiful, functional, dynamic user interfaces and webpage layouts.</p>
            </div>
           </div>

           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>React Migration</h1>
                <p className='robust1_peregrap'>Waverley’s React JS developers help you move your web applications and websites to the React platform, preserving their essence and improving the feel.</p>
            </div>
           </div>
        </div>

        <div className='row'>
           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>Plugin Development</h1>
                <p className='robust1_peregrap'>Our React JS developers customize your web applications or create your cross-browser add-ons for third-party integrations.</p>
            </div>
           </div>

           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>Progressive Web Apps</h1>
                <p className='robust1_peregrap'>Waverley will help you create cross-platform web applications to provide similar experience to your desktop and mobile users.</p>
            </div>
           </div>

           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>React Native Development</h1>
                <p className='robust1_peregrap'>Call on us for React Native app development services to create native mobile apps for iOS, Android, or Windows.
                </p>
            </div>
           </div>
        </div>

        <div className='row'>
           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>MVP and Prototyping</h1>
                <p className='robust1_peregrap'>From ideation to concept validation, our development team will accompany your fresh React project all along.</p>
            </div>
           </div>

           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>Support and Maintenance</h1>
                <p className='robust1_peregrap'>Our global team can guarantee omniscient 24/7 support as well as long-lasting React JS maintenance for our and adopted products.</p>
            </div>
           </div>

           <div className='col-md-4'>
           <div className='crad_react_card1'>
                <h1 className='robust1_hadding'>Audit and Consulting</h1>
                <p className='robust1_peregrap'>Get fine-grade technical consulting services, peer review, or independent project audit from Waverley as your third-party React development company.</p>
            </div>
           </div>
        </div>

    </div>
  </section>

  <section>
    <div className='container'>
       <div className='row'>
       <div className='col-md-6'>
            <div className='BENEFITS_card'>
                <img className='React4_img1' src={React4} alt="" srcset="" />
            </div>
        </div>

        <div className='col-md-6'>
            <div className='BENEFITS_card'>
               <h1 className='BENEFITS1_hadding'>BENEFITS OF USING REACT JS</h1>
               <p className='BENEFITS1_peregrap'>Why opt for React JS development services for your project?</p>
               <div>
               <h1 className='Code_Usability'>Code Usability</h1>
               <p className='Code_Usab_oeregrap'>React JS is an easy-to-learn and flexible JavaScript library for web app development that which can be quickly adopted by an expert JS developer and utilized in multiple ways.</p>
               </div>

               <div>
               <h1 className='Code_Usability'>Modular Structure</h1>
               <p className='Code_Usab_oeregrap'>Due to its reusable components and building blocks, web application creation and React JS maintenance is time-saving, fail-proof, and cost-efficient.</p>
               </div>

               <div>
               <h1 className='Code_Usability'>High Performance</h1>
               <p className='Code_Usab_oeregrap'>React’s virtual DOM and server-side rendering help create fast, complex web applications with rich and dynamic user interfaces.</p>
               </div>

            </div>
        </div>
       </div>
    </div>
  </section>

  <section className='Based_react_back'>
    <div className='container'>
        <h1 className='robust1_hadding12'>OUR REACT JS DEVELOPMENT PROCESS</h1>
        <p className='robust1_peregrap'>Based on our experience, a well-organized software development process is key to the project success.So how does our React development team work?</p>

        <div className='row'>
           <div className='col-md-3'>
           <div className='crad_react_card13'>
                <h1 className='robust1_hadding'>Project Analysis</h1>
                <p className='robust1_peregrap'>Our Business Analysts, System Architects, and Competence Leads analyze your product idea, requirements, and business potential, identifying ways and technologies to implement your solution.</p>
            </div>
           </div>

           <div className='col-md-3'>
           <div className='crad_react_card13'>
                <h1 className='robust1_hadding'>Estimation and Proposal</h1>
                <p className='robust1_peregrap'>If our solution design works for you, we conduct the timeline and cost estimation and provide you with a detailed Project Proposal and Service Provision Agreement to sign.</p>
            </div>
           </div>

           <div className='col-md-3'>
           <div className='crad_react_card13'>
                <h1 className='robust1_hadding'>Team Assembly</h1>
                <p className='robust1_peregrap'>Upon the conclusion of the Agreement, we select and hire software development professionals to match your product needs and our Project Proposal specifications.</p>
            </div>
           </div>

           <div className='col-md-3'>
           <div className='crad_react_card13'>
                <h1 className='robust1_hadding'>Active Development</h1>
                <p className='robust1_peregrap'>We follow the best practices of software development services delivery, including Agile project management, CI/CD, frequent code reviews, code quality control, test-driven development, regular communication, etc.</p>
            </div>
           </div>

        </div>
    </div>
  </section>

  <section>
    <div className='container'>
        <h1 className='OUR_TECH_hadding'>OUR TECH STACK</h1>
        <p className='Waverley_peregrap'>Waverley’s React development team consists of experts with deep expertise<br/>
        in the entire JavaScript ecosystem providing top software development services.</p>

       <div className='providing_card'>
       <div className='row'>
            <div className='col-md-6'>
                <h1 className='main_hadding_reactr12'>WEB APP DEVELOPMENT</h1>
                <h1 className='sopwetar_react'>React JS  |  Next JS | Gatsby</h1>
            </div>

            <div className='col-md-6'>
                <h1 className='main_hadding_reactr12'>MOBILE APPS</h1>
                <h1 className='sopwetar_react'>React Native |  Ionic |Expo</h1>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-6'>
                <h1 className='main_hadding_reactr12'>DESKTOP APPS</h1>
                <h1 className='sopwetar_react'>Electron</h1>
            </div>

            <div className='col-md-6'>
                <h1 className='main_hadding_reactr12'>FULL-STACK DEVELOPMENT</h1>
                <h1 className='sopwetar_react'>NodeJS |  MeteorJS | NestJS | ExpressJS</h1>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-6'>
                <h1 className='main_hadding_reactr12'>REACT LIBRARIES</h1>
                <h1 className='sopwetar_react'>Redux | MobX | React Context | Webpack <br/>
                | Rollup | Parcel | Gulp | Babel | ESlint </h1>
            </div>

            <div className='col-md-6'>
                <h1 className='main_hadding_reactr12'>CLOUD</h1>
                <h1 className='sopwetar_react'>AWS |  Azure | Google Compute Engine | <br/>
                | Docker | Kubernetes </h1>
            </div>
        </div>


       </div>
    </div>
  </section>

  
  <section className='PICK_YOUR_card'>
    <div className='container'>
        <h1 className='PICK_1hadding'>WHY CHOOSE WAVERLEY FOR REACT JS APPLICATION DEVELOPMENT?</h1>
        <p className='PICK_1peregrap'>Our tech team stands above our competition in the software development services due to its unparalleled characteristics.</p>

        <div className='row'>
            <div className='col-md-4'>
                <div className='react_card14'>
                    <img className='React1_img1' src={React1} alt="" srcset="" />
                    <h1 className='Dedicated_hadding'>Code Quality</h1>
                    <p className='Dedicated_peregrap'>Our coders guarantee that your mobile or web application code is clean, bug-free, and well-documented, following the industry and our React development company standards.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='react_card14'>
                    <img className='React1_img2' src={React2} alt="" srcset="" />
                    <h1 className='Dedicated_hadding'>Project Management</h1>
                    <p className='Dedicated_peregrap'>Our certified PMs and Scrum Masters make sure the software development process runs smoothly and keeps the tech team well-informed, motivated, and easy to communicate with.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='react_card14'>
                    <img className='React1_img1' src={React3} alt="" srcset="" />
                    <h1 className='Dedicated_hadding'>Security</h1>
                    <p className='Dedicated_peregrap'>Our software development company is ISO27001-certified, granting you the additional confidence in the security of the React JS development services you entrust to us.</p>
                </div>
            </div>
        </div>
    </div>
  </section>

  <section>
    <div className='container'>
        <h1 className='RELATED_SERVICES'>RELATED SERVICES</h1>
        <div className='row'>
            <div className='col-md-4'>
                <div className='SERVICES_card23'>
                    <img className='React5_img1' src={React5} alt="" srcset="" />
                    <h1 className='ui_ux_card_hadding'>UI/UX Design</h1>
                    <p className='ui_ux_card_peregrap'>We help companies create world-class software solutions by redesigning their existing products or designing new ones from scratch.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='SERVICES_card23'>
                    <img className='React5_img1' src={React6} alt="" srcset="" />
                    <h1 className='ui_ux_card_hadding'>Dedicated Development Team</h1>
                    <p className='ui_ux_card_peregrap'>Waverley builds mature teams of software development experts with advanced degrees, based in our remote dedicated development centers.</p>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='SERVICES_card23'>
                    <img className='React5_img1' src={React7} alt="" srcset="" />
                    <h1 className='ui_ux_card_hadding'>Mobile App Development</h1>
                    <p className='ui_ux_card_peregrap'>Powered with advanced programming languages, frameworks and skills, our mobile app developers are ready for complex mobile application development and mobile testing.</p>
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


  )
}
export default React_page;
