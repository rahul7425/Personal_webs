import React from 'react'
import "./Digital_Marketing.css";
import { Link } from "react-router-dom";
import Digital1 from "../../../assets/image/Digital1.jpg";
import Digital2 from "../../../assets/image/digital-marketing2.svg";
import Digital3 from "../../../assets/image/digital-marketing3.svg";
import Digital4 from "../../../assets/image/digital mar1.png";
import Digital5 from "../../../assets/image/digital mar2.svg";
import IOT6 from "../../../assets/image/most-popular-backend-frameworks.jpg";

 const Digital_Marketing = () => {
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
            <h1 className='Digital_hadding'>Digital Marketing Services</h1>
            <p className='Digital_peregrap'>Grow Your Client Base With Data-Driven and Targeted Strategies</p>

            <div className='row'> 
                <div className='col-md-6'>
                    <div className='Digital_card'>
                        <p className='Digital_peregrap1'>Thrive Internet Marketing Agency is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Thrive trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.<br/><br/>
                        We’re not a static company. We don’t limit ourselves to specific industries. Thrive has the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in any industry.</p>
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='Digital_card'>
                       <img className='Digital1_img' src={Digital1} alt="" srcset="" />
                    </div>
                </div>

            </div>
        </div>
      </section>

      <section className='Digital_main_part'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='Digital_card12'>
                       <img className='Digital2_img' src={Digital2} alt="" srcset="" />
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='Digital_card12'>
                    <p className='cookie-cutter'>So many other agencies rely on a one-size-fits-all approach, many times offering you the same strategy and cookie-cutter website as your competitor down the street.<br/><br/>
                    Thrive works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly.<br/><br/>Unlike so many other agencies that use glitz and glamor to close sales and then fail to execute, Thrive focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI).<br/><br/>Our reviews and testimonials speak volumes. We earn your business every day with month-to-month contracts.<br/><br/>Take a look below at the wide variety of digital marketing services Thrive offers. Contact us today to learn more about how we can help your business!</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className='container'>
            <h1 className='Services_Marketing_hadding'>How Digital Marketing Services Drive Business Growth</h1>
            <p className='Services_Marketing_peregrap'>Engage Your Target Customers at the Right Time on the Right Platform </p>

            <div className='row'>

                <div className='col-md-6'>
                    <div className='market_their_card'>
                       <p className='market1_peregrap'>Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.<br/><br/>Hiring an internet marketing agency is one of the best ways to reach your prospects while maintaining a robust relationship with your existing clients. As long as your business has a strong digital presence, your customers will always find you.<br/><br/>Since 2005, our digital marketing company has been partnering with hundreds of businesses in the United States to achieve their conversion goals. Throughout the years, we’ve provided an array of custom digital marketing services to our clients and generated the following results:</p>
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='market_their_card'>
                        <img className='Digital3_img' src={Digital3} alt="" srcset="" />
                    </div>
                </div>

            </div>
        </div>
      </section>

      <section>
            <div className='ecommerce_back_img text-center'>
            <div className='container'>
                <div className='Features_mai1_card'>
                    <p className='designs_peregrap1'>Our digital marketing agency follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage Thrive’s internet marketing services today and let us help you boost your customer acquisition and retention rates.</p>
                    <button className='Get_Free_Consultation'>LET’S TALK</button>
                </div>
            </div>
        </div>
      </section>
      
      <section>
        <div className='container'>
            <h1 className='Marketing_hadding_digital'>Thrive’s Digital Marketing Services</h1>
            <p className='Recognition_peregrap'>Build Brand Recognition as an Industry Leader and Increase Profitability</p>

            <div className='row'>
                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Search Engine Optimization (SEO)</h1>
                        <p className='Through_peregrap1'>Through careful keyword research and white hat SEO practices, we can help you achieve higher organic rankings and increased visibility in search results. Our internet marketing company performs extensive keyword research, conducts on-page and off-page optimization and tracks your results with Google Search Console. These practices allow us to attract high-quality leads and traffic and increase your conversions as part of your digital marketing services.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Franchise(SEO)</h1>
                        <p className='Through_peregrap1'>Amplify your market reach and improve your brand reputation with Thrive’s franchise SEO services. Our team creates a franchise marketing plan around your ideal prospects and service location. We claim and optimize your business listings, publish geo-modified service pages and blog posts, ensure brand consistency and garner positive online reviews from your best customers. In this way, we help you manage and promote all your franchisees and secure high local rankings.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Local (SEO)</h1>
                        <p className='Through_peregrap1'>Statistics show that 88 percent of consumers searching for local businesses online will call or visit a store within 24 hours. Attract your ideal customers and generate more leads and sales with Thrive’s internet marketing services. Our internet marketing company ensures your name, address and phone number (NAP) consistency, enhances your location pages and conducts local link building. We also leverage social media platforms to stay top of mind with your audiences.</p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Technical SEO</h1>
                        <p className='Through_peregrap1'>Establish a strong online foundation with on-point technical SEO and internet marketing services. Our technical SEO experts run crawl error reports, check your HTTPS status codes, optimize your site speed, audit redirects and eliminate duplicate content. In doing so, we increase your website’s crawlability and indexability. We also add structured data markup to your website and facilitate site migration, depending on your needs and requirements.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Link Building</h1>
                        <p className='Through_peregrap1'>AAcquire a steady stream of traffic from high-authority websites and increase your consumer trust. Our internet marketing agency capitalizes on paid advertisements, sponsorships and collaborations to put your page content where influential people will see them. We utilize strategic guest blogging, publish unique, compelling content, distribute data-driven infographics and boost your social media engagement. In this way, we build quality backlinks that drive more sales.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Web Design & Development</h1>
                        <p className='Through_peregrap1'>Thrive builds custom, mobile-ready and search engine optimized websites that help you meet your business objectives and support your digital marketing campaigns. We create a visual hierarchy to highlight your important site elements and encourage page visitors to take your desired action. Our web design experts utilize clear calls-to-action (CTAs), avoid carousels and rotating sliders, simplify form fields and create content for your persona.</p>
                    </div>
                </div>
            </div>

            
            <div className='row'>
                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Custom Website Design</h1>
                        <p className='Through_peregrap1'>Capture your target audiences’ attention with a professional custom web design that highlights your business’ unique value propositions. Our digital marketing company has a team of WordPress experts with years of experience in creating custom websites for specific niche markets. We analyze your industry demands, design ADA compliant websites and provide ongoing site maintenance. These internet marketing services are designed to create a positive first impression of your brand.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Social Media Marketing</h1>
                        <p className='Through_peregrap1'>Ready to expand and market to your audiences on social media? We build social media campaigns to help your business grow and engage your followers. Our digital marketing agency identifies your goals, performs competitor benchmarking and evaluates your customers' online behavior. Using data and analytics, we develop custom social media brand management and paid advertising strategies tailored to your business.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Pay Per Click (PPC) Management</h1>
                        <p className='Through_peregrap1'>Reach your customers quickly and with precision with a data-driven PPC campaign. Our PPC Specialists are AdWords certified, so you can rest easy knowing your campaign is in the hands of professionals. Our team creates targeted ad copies, optimizes your bidding strategies and device targeting tactics and monitors your ROI for each keyword. We also take advantage of seasonal trends to promote your products and drive high-volume leads and traffic.</p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Video Production</h1>
                        <p className='Through_peregrap1'>Video marketing is powerful and engaging when done right. Storytelling with video has the power to take your brand to the next level and increase your customer engagement by leaps and bounds. Capture your customers' attention and create a buzz in the online community with captivating, SEO-optimized video content. We’ve got you covered from location scouting and scriptwriting to motion graphics creation and video editing.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Content Writing</h1>
                        <p className='Through_peregrap1'>Your website's content is crucial: it's the foundation of your SEO and the reason many people visit your site. Entrust your content creation with Thrive, and we'll write it with precision. Our content specialists stay abreast of the latest news and market trends to ensure we adhere to Google standards when developing content. We write headlines that pack a punch, utilize high-performing keywords, incorporate imagery and structure your posts to promote easy reading.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Online Reputation Management</h1>
                        <p className='Through_peregrap1'>Your reviews and online reputation can make or break your success online. Improve your reputation and reap the rewards with the help of our internet marketing agency. We partner with Rize Reviews to improve your review generation, review monitoring and review response publishing tactics. Our team utilizes state-of-the-art online reputation management software, two-way SMS marketing and QR code</p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Amazon Marketing Services</h1>
                        <p className='Through_peregrap1'>Getting found on Amazon is not easy! Competition is fierce and thick, so you need to find the right digital marketing company to strengthen your AMS strategy. At Thrive, we help your products get found in this massive marketplace. Our Amazon marketing experts combine the best Amazon SEO, Amazon PPC and Amazon storefront and branding practices to deliver valuable results. We develop your keyword strategy and optimize your product listings to lower your advertising cost of sales (ACoS).</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Ecommerce Marketing</h1>
                        <p className='Through_peregrap1'>The eCommerce industry generates 23 percent YoY in revenue. Take advantage of a whole range of opportunities in the eCommerce business to promote your products and offer round the clock convenience to your customers. Our internet marketing company provides eCommerce SEO and eCommerce PPC solutions to drive top-of-funnel traffic to your website. We generate more product reviews, optimize your product pages and personalize your marketing strategies based on your customer needs.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Conversion Rate Optimization</h1>
                        <p className='Through_peregrap1'>Getting visitors to your site is only half the battle. Conversion optimization ensures your site is primed to turn them into customers. Move more page visitors to the bottom of the sales funnel and increase your conversion rate with Thrive’s CRO services. Our digital marketing company optimizes your website for mobile and voice search, creates clutter-free landing pages, places verified payment systems and simplifies your site navigation to promote better conversions.</p>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Email Marketing</h1>
                        <p className='Through_peregrap1'>How many emails from businesses do you delete every day? Choose Thrive and let's make your email marketing campaigns stand out and work for your business. We create personalized email newsletters to keep your emails out of spam folders and encourage your customers to take your desired action. Our team builds your subscriber list, tests email campaigns before delivery, utilizes power words on your content and creates a curiosity gap in your emails.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Ecommerce Web Design</h1>
                        <p className='Through_peregrap1'>At Thrive, we understand the nuances of eCommerce web design. When you sell products online, the design of your website is crucial to its success. According to a study by Baymard Institute, eCommerce websites with an optimized checkout design can gain a 35 percent increase in conversions. Partner with our internet marketing agency and let us help you highlight your competitive advantages and reduce your cart abandonment.</p>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='keyword_research_card'>
                        <h1 className='Search1_hadding'>Web Hosting</h1>
                        <p className='Through_peregrap1'>You need a secure, trustworthy company to host your new website. Go with Thrive and you won't have to worry about it. Our digital marketing agency provides network monitoring, system backup and restoration, malware scanning and removal, file management and WordPress acceleration. We also offer unlimited bandwidth and data transfer, Distributed Denial of Service (DDoS) prevention and free Secure Sockets Layer (SSL) certificate to improve your site security.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className='container'>
            <h1 className='Using_hadding1'>Why Your Business Should Be Using Digital Marketing Services</h1>
            <h1 className='Engage_peregrap'>Engage More Clients and Rank High On Search Results</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='Digital4_img' src={Digital4} alt="" srcset="" />
                </div>
                <div className='col-md-6'>
                   <p className='spend_peregrap'>The online marketing industry is growing at an unprecedented rate. According to eMarketer, businesses in the U.S. spend more than $110 billion on digital advertising. With more companies investing their time and resources in online marketing, relying on your old advertising tactics is not enough to win over customers.<br/><br/>Increase your sales volume and build a robust digital foundation with value-driven internet marketing services. Digital marketing helps you:</p>
                </div>
            </div>

            <div className='row'>
               
                <div className='col-md-6'>
                   <p className='spend_peregrap'>A study presented by BrightTALK shows that 42 percent of marketing professionals find the lack of quality data their biggest barrier to lead generation. With the help of a trusted internet marketing company, you can gain a holistic view of your customer journey and competition.<br/><br/>Don’t waste your investment in marketing techniques that do not deliver measurable results. Partner with Thrive Internet Marketing Agency today and establish your market dominance with our targeted digital marketing services.</p>
                </div>

                <div className='col-md-6'>
                    <img className='Digital4_img' src={Digital5} alt="" srcset="" />
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
export default Digital_Marketing;
