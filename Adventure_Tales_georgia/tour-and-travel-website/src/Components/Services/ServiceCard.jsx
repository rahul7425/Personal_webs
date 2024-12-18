import React from 'react';
import './Services.css'; // Import the same CSS for consistency

const ServiceCard = ({ title, description, imgSrc }) => {
  return (
    <div className="service-card">
      <img
        src={imgSrc}
        alt={title}
        className="service-image"
      />
      <h5 className="service-title">{title}</h5>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
