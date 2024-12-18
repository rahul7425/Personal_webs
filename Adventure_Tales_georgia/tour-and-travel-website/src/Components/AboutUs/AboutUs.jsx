import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css'; // Optional for additional styles
import officeImage from '../../assets/office.jpg'; // Example image for "About the Company"
import passionImage from '../../assets/passionImage.jpg';
import servicesImage from '../../assets/servicesImage.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs = () => {
  const [recommendPercent, setRecommendPercent] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [startCounter, setStartCounter] = useState(false);

  const countersRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (startCounter) {
      const percentInterval = setInterval(() => {
        setRecommendPercent((prev) => {
          if (prev < 90) return prev + 1;
          clearInterval(percentInterval);
          return prev;
        });
      }, 30);

      const customersInterval = setInterval(() => {
        setHappyCustomers((prev) => {
          if (prev < 1000) return prev + 10;
          clearInterval(customersInterval);
          return prev;
        });
      }, 10);
    }
  }, [startCounter]);

  return (
    <>
      <section style={{ paddingTop: '80px' }}>
        <div className="container">
          {/* Company Introduction */}
          <div className="row align-items-center mb-4 img-fluid" data-aos="fade-up">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <img src={officeImage} alt="Office" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <h1 className="heading1" data-aos="fade-right">About</h1>
              <h2 className="heading2" data-aos="fade-left">Adventure tales</h2>
              <h3 className="heading3" data-aos="fade-up">World</h3>
              <p className="para1" data-aos="fade-up">
                Welcome to Adventure Tales World, your trusted travel partner in Georgia and beyond. We specialize in
                curating unforgettable tours, car rentals, living arrangements, and more. Our mission is to offer you an
                unmatched experience, full of exciting adventures and new stories.
              </p>
            </div>
          </div>

          {/* Motivated Company Section */}
          <div className="row align-items-center mb-4" data-aos="fade-left">
            <div className="col-lg-6 order-lg-3 mb-4 mb-lg-0">
              <img src={passionImage} alt="Driven by Passion" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h1 className="head1" data-aos="zoom-in">Driven</h1>
              <h2 className="head2" data-aos="zoom-in">By</h2>
              <h3 className="head3" data-aos="zoom-in">Passion</h3>
              <p className="para1" data-aos="zoom-in">
                At Adventure Tales World, we are a motivated team of travel enthusiasts dedicated to providing
                exceptional service. We believe that travel can change lives, and we are committed to crafting unique,
                personalized experiences that go beyond the ordinary.
              </p>
            </div>
          </div>

          {/* Featured Section */}
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-6 mb-4 mb-lg-5">
              <img src={servicesImage} alt="Feature-rich services" className="img-fluid rounded " />
            </div>
            <div className="col-lg-6">
              <h1 className="hed1" data-aos="flip-left">Feature</h1>
              <h2 className="hed2" data-aos="flip-left">-Rich</h2>
              <h3 className="hed3" data-aos="flip-left">Services</h3>
              <p className="para1" data-aos="flip-left">
                Our services include everything from guided tours to car rentals, accommodations, and currency exchange.
                We handle all aspects of your trip, ensuring a seamless experience from the moment you land in Georgia
                or Dubai. Let us take care of the details so you can focus on the adventure!
              </p>
            </div>
          </div>

{/* Counters Section */}
<div className="counter-section container">
  <div className="row text-center mt-5" ref={countersRef} data-aos="fade-up">
    {/* First Counter */}
    <div className="col-lg-6 mb-5 mb-lg-0" data-aos="zoom-in">
      <div className="counter-box p-4 rounded shadow" style={{ backgroundColor: '#b9a3c4' }}>
        <h2 className="counter">{recommendPercent}%</h2>
        <p className="counter-heading">Percent of travelers recommend us to friends and family</p>
      </div>
    </div>

    {/* Second Counter */}
    <div className="col-lg-6" data-aos="zoom-in">
      <div className="counter-box p-4 rounded shadow" style={{ backgroundColor: '#b9a3c4' }}>
        <h2 className="counter">{happyCustomers}</h2>
        <p className="counter-heading">Happy Customers</p>
      </div>
    </div>
  </div>
</div>


        </div>
      </section>
    </>
  );
};

export default AboutUs;
