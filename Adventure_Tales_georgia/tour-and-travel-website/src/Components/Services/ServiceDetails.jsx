import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'; // Styles specific to service details
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample services array
const services = [
  {
    title: 'Airport Transfers',
    fullDescription: 'Enjoy smooth airport transfers with our premium transportation services. We ensure timely pick-up and drop-off at your convenience.',
    imgSrc: '/assets/airport-transfers.jpg', // Make sure this path is correct
  },
  {
    title: 'Tour Guide',
    fullDescription: 'Our tour guides are experts in the local culture and history, providing an immersive and enriching travel experience.',
    imgSrc: '/assets/tour-guide.jpg',
  },
  {
    title: 'Accommodation',
    fullDescription: 'We offer a range of accommodations, from budget-friendly options to luxurious stays, all in prime locations.',
    imgSrc: '/assets/accommodation.jpg',
  },
  // Add more services as needed
];

const ServiceDetails = () => {
  const { id } = useParams(); // Get the service id from the URL
  const service = services[parseInt(id)]; // Find the service based on the id

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  if (!service) {
    return <p>Service not found!</p>; // Error handling if the service is not found
  }

  return (
    <div className="service-details-container" data-aos="fade-up">
      <h1 className="service-details-title">{service.title}</h1>
      <img
        src={service.imgSrc} // Load the image directly
        alt={service.title}
        className="service-details-image"
      />
      <p className="service-details-description">{service.fullDescription}</p>
    </div>
  );
};

export default ServiceDetails;
