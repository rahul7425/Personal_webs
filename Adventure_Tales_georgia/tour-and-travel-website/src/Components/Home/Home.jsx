import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
import carRental from '../../assets/car-rental.jpg';
import comfortableStays from '../../assets/comfortable-stays.jpg';
import dubaiBeauty from '../../assets/dubai-beauty.jpg';
import excitingAdventures from '../../assets/exciting-adventures.jpg';
import exploreGeorgia from '../../assets/explore-georgia.jpg';
import './Home.css';

// Define faqQuestions before using it
const faqQuestions = [
  { question: "What kind of clothes do I need to carry while traveling to Georgia?", answer: "You should carry clothes appropriate for the season. In winter, pack warm layers, and in summer, light clothes are sufficient, but it's always good to have a jacket for cooler evenings." },
  { question: "What is the best time to visit Georgia?", answer: "The best time to visit Georgia is between May and October when the weather is warm, and the landscapes are lush and green." },
  { question: "Do I need a visa to visit Georgia?", answer: "Citizens of many countries can enter Georgia visa-free for up to a year. However, it's best to check specific visa requirements based on your country." },
  { question: "Is Georgia a safe country to visit?", answer: "Yes, Georgia is considered a very safe country to visit. The crime rate is low, and the people are known for their hospitality." },
  { question: "What is the currency used in Georgia?", answer: "The official currency of Georgia is the Georgian Lari (GEL)." },
  { question: "Are credit cards widely accepted in Georgia?", answer: "Yes, credit cards are accepted in most hotels, restaurants, and shops in larger cities, but it's advisable to carry cash when visiting rural areas." },
  { question: "What are the best places to visit in Georgia?", answer: "Some of the top places include Tbilisi, Kazbegi, Mestia, Batumi, and the wine regions of Kakheti." },
  { question: "Can I rent a car in Georgia?", answer: "Yes, car rentals are available in major cities, and it's a great way to explore the country's stunning landscapes." },
  { question: "What languages are spoken in Georgia?", answer: "The official language is Georgian, but many people, especially in tourist areas, speak English and Russian." },
  { question: "Is tipping common in Georgia?", answer: "Tipping is not mandatory, but it is appreciated in restaurants and for services. A 10% tip is generally considered polite." },
];

const galleryImages = [
  { id: 1, src: exploreGeorgia, alt: 'Explore Georgia', title: 'Explore the Beauty of Georgia' },
  { id: 2, src: dubaiBeauty, alt: 'Beautiful Destinations', title: 'Discover Beautiful Destinations' },
  { id: 3, src: comfortableStays, alt: 'Comfortable Stays', title: 'Enjoy Comfortable Stays' },
  { id: 4, src: excitingAdventures, alt: 'Exciting Adventures', title: 'Embark on Exciting Adventures' },
  { id: 5, src: carRental, alt: 'Car Rentals', title: 'Rent a Car for Your Journey' },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Initialize all answers to be hidden (false)
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (index) => {
    setVisibleAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="content">

      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {galleryImages.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={image.id}>
              <img src={image.src} className="d-block w-100" alt={image.alt} />
              <div
                className="carousel-caption d-none d-md-block"
                data-aos={index % 2 === 0 ? "fade-up" : "fade-left"} // Alternate animations for variety
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h5>{image.alt}</h5>
                <p>{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="text-center mb-1" data-aos="fade-right">Features of Our Tours</h2>
          <div className="row g-1">
            <div className="col-lg-4">
              <div className="feature-item" data-aos="fade-up">
                <h3>Guided Tours</h3>
                <p>Our experienced guides will lead you through all the must-see places, offering a rich cultural experience.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                <h3>Luxury Accommodation</h3>
                <p>Stay in top-quality hotels with all the amenities you need for a comfortable stay.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                <h3>Exciting Adventures</h3>
                <p>Explore new places, hike through beautiful landscapes, and enjoy thrilling outdoor activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="text-center mb-4" data-aos="fade-left">Top Tourism Places in Georgia</h2>
          <div className="row g-4">
            {galleryImages.map((image) => (
              <div className="col-md-4" key={image.id} data-aos="zoom-in">
                <div className="gallery-item">
                  <img src={image.src} alt={image.alt} className="img-fluid" />
                  <div className="overlay">
                    <h4>{image.title}</h4>
                    <p>{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="faq py-5">
  <div className="container">
    <h2 className="text-center mb-4" data-aos="fade-left">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
      {faqQuestions.map((faq, index) => (
        <div className="accordion-item" key={index} data-aos="flip-up">
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button faq-question"
              type="button"
              onClick={() => toggleAnswer(index)}  // Handle state toggle
              aria-expanded={visibleAnswers[index] ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${visibleAnswers[index] ? 'show' : ''}`}  // Control visibility using React state
            aria-labelledby={`heading${index}`}
          >
            <div className="accordion-body faq-answer">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Security and Satisfaction Section */}
      <section className="security-satisfaction py-5">
        <div className="container text-center">
          <h2>We Ensure Your Security & Satisfaction</h2>
          <p>Our tours are designed to provide the highest level of security and satisfaction. You can trust us to deliver an amazing and safe experience.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
