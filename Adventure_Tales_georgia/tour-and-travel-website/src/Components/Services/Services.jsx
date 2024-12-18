import React, { useEffect } from 'react';
import './Services.css';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom'; 

// pics
import airts from "../../assets/airport-transfers.jpg";
import accommodation from "../../assets/accomodation.jpg";
import tour from "../../assets/tour-guide.jpg";
import food from "../../assets/food.jpg";
import adventure from "../../assets/adventure.jpg";
import transport from "../../assets/transport.jpg"; 
import pritours from "../../assets/private-tours.jpg";
import kid from "../../assets/kids.jpg";
import honey from "../../assets/honeymoon.jpg";
import fritrip from "../../assets/friends.jpg";
import famtrip from "../../assets/family.jpg";
import grptour from "../../assets/group.jpg";
import retrip from "../../assets/reunion.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Array of all services
const services = [
  { id: 1, title: 'Airport Transfers', description: 'Seamless transfers to and from airports.', imgSrc: airts },
  { id: 2, title: 'Tour Guide', description: 'Explore hidden gems with professional guides.', imgSrc: tour },
  { id: 3, title: 'Accommodation', description: 'Stay at top-rated hotels and guesthouses.', imgSrc: accommodation },
  { id: 4, title: 'Food Experiences', description: 'Authentic Indian and Georgian cuisines.', imgSrc: food },
  { id: 5, title: 'Sightseeing & Adventure', description: 'Exciting tours for every adventure seeker.', imgSrc: adventure },
  { id: 6, title: 'Private Tours', description: 'Customized tours based on your preferences.', imgSrc: pritours },
  { id: 7, title: 'Family-Friendly', description: 'Create memories with your loved ones.', imgSrc: famtrip },
  { id: 8, title: 'Friends Trip', description: 'Adventure-filled trips with friends.', imgSrc: fritrip },
  { id: 9, title: 'Honeymoon Packages', description: 'Special honeymoon packages for couples.', imgSrc: honey },
  { id: 10, title: 'Group Tours', description: 'Explore together on organized tours.', imgSrc: grptour },
  { id: 11, title: 'Reunion Tours', description: 'Reconnect with family and friends.', imgSrc: retrip },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-container">
      <h2 className="services-title" data-aos="fade-up">Our Travel Services</h2>

      {/* Featured Section */}
      <div className="first-card" data-aos="zoom-in">
        <img src={transport} alt="Transportation" />
        <h3>Vehicles for Transportation</h3>
        <p>A wide range of vehicles to match your travel needs.</p>
        <Link to="/services/vehicles" className="more-button">Explore</Link>
      </div>

      {/* Grid of All Services */}
      <div className="services-grid">
        {services.slice(1).map((service) => (
          <div className="service-card" key={service.id} data-aos="fade-up">
            <img src={service.imgSrc} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {/* <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="more-button">Learn More</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
