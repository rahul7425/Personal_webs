import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';  // For Bootstrap styling
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // For Bootstrap JS functionality

import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer';
import VehicleDetails from './Components/Services/VehicleDetails'; // New page component
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Run animation only once
    });
  }, []); // Empty array means this runs once when the component mounts

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/vehicles" element={<VehicleDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
