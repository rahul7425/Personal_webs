import React from 'react'
import"./Services1.css"
import img1 from "../../../assets/image/Programming-amico.svg"
import img2 from "../../../assets/image/Connected world-rafiki.svg"
import img5 from "../../../assets/image/Server-amico.svg"
import img3 from "../../../assets/image/Online world-cuate.svg"
import ShowCounter from '../../counter/showCounter'
import img4 from "../../../assets/blog/web_compatibility.webp";
// import img4 from "../../../assets/image/Cloud hosting-pana.png"

function Services1() {
  return (
    <>
    <div className='services1'>
   <h1 className='ourservice'> Our services</h1>
   {/* <ShowCounter/> */}
    </div>
    <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                    <img className='project_img' src={img1} alt="" srcset="" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='everything_main'>
                    <h3 className='main_text54'> Web-Development</h3>
                       <p className='main_peregrap_87'>We offer comprehensive web development services tailored to meet your specific needs and goals. Our team specializes in crafting responsive and user-friendly websites that elevate your online presence. From custom designs to robust backend solutions.
                       Our web development services encompass everything from initial concept and design to implementation and ongoing maintenance. We utilize the latest technologies and best practices to ensure your website is not only visually appealing but also highly functional and scalable. </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='everything_main1' >
                    <h3 className='main_text54'> Application-Development</h3>
                       <p className='main_peregrap_87'>Our mobile development services cater to businesses seeking to establish a strong presence in the mobile sphere. We specialize in creating customized solutions for both iOS and Android platforms, ensuring seamless user experiences across devices. From crafting elegant user interfaces to implementing robust backend functionality, our team handles every aspect of the development process with precision and expertise. By staying abreast of the latest trends and technologies, we guarantee that your app not only meets but exceeds industry standards. </p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                    <img className='project_img2' src={img3} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                    <img className='project_img' src={img5} alt="" srcset="" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='everything_main' >
                    <h3 className='main_text54'> Website-Hosting</h3>
                       <p className='main_peregrap_87'>Our website hosting services are designed to provide businesses with the essential infrastructure needed to establish and maintain a robust online presence. We offer a range of hosting solutions tailored to meet the unique needs of our clients, from shared hosting for small businesses to dedicated servers for enterprise-level websites. Our hosting packages include features such as reliable uptime, fast loading speeds, and scalable resources, ensuring that your website can handle fluctuations in traffic and growth over time. </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* <section>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                    <h3 className='main_text54'> Digital-Marketing</h3>
                       <p className='main_peregrap_87'>Our SEO-friendly services are tailored to enhance your online visibility and drive organic traffic to your website. We offer comprehensive SEO solutions designed to optimize your website's structure, content, and performance for search engines. Our team conducts in-depth keyword research to identify high-impact keywords relevant to your industry and target audience. We then implement strategic on-page and off-page optimization techniques to improve your website's ranking in search engine results pages (SERPs).</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                    <img className='project_img2' src={img2} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
      </section> */}
      
   
    <div className="container mb-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              {/* <h1 className="FEATURES_text">FEATURES</h1> */}
              <h1 className="Key_Features" style={{marginTop:"26px"}}>Key Features</h1>
              <p className="involved_new">
              Without any doubt, Keendroid is a fast-growing website<br/> development company. The company is involved in<br/> creating excellent web designs and development for its<br/> clients and differentiates between a code and a great code<br/> with experience and technologies. Our team of skilled<br/> developers and designers work collaboratively to deliver innovative and customized solutions tailored to meet each<br/> client's unique needs. We pride ourselves on our<br/> commitment to quality,ensuring that every project is<br/> completed to the highest standards. At Keendroid, we<br/> strive to stay ahead of industry trends, leveraging the <br/>latest technologies to provide cutting-edge digital <br/>experiences.
              </p>
            
            </div>
          </div>
          <div style={{marginLeft:"-50px",}} className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div className="icone_img_about12" style={{marginTop:"30px"}}>
                  <img className="icone_new_img" src={img4} alt="" srcset="" />
                  <h1>Web Compatibility</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icone_img_about12" style={{marginTop:"30px"}}>
                  <img className="icone_new_img" src="https://nlet.in/assets/front/websiteev-delopment/loading_speed.webp" alt="" srcset="" />
                  <h1>Loading Speed</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icone_img_about12" style={{marginTop:"30px"}}>
                  <img className="icone_new_img" src="https://nlet.in/assets/front/websiteev-delopment/user-friendly_navigation.webp" alt="" srcset="" />
                  <h1>User-friendly navigation</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="icone_img_about12">
                  <img className="icone_new_img" src="https://nlet.in/assets/front/websiteev-delopment/good_web_design.webp" alt="" srcset="" />
                  <h1>Good Web Design</h1>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="icone_img_about12">
                  <img className="icone_new_img" src="https://nlet.in/assets/front/websiteev-delopment/well-formatted_content.webp" alt="" srcset="" />
                  <h1>Well Formatted Content</h1>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="icone_img_about12">
                  <img className="icone_new_img" src="https://nlet.in/assets/front/websiteev-delopment/flexible.webp" alt="" srcset="" />
                  <h1>Flexibie</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      


    </>
  )
}

export default Services1