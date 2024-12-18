import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  // For Bootstrap styling
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [navbarStyle, setNavbarStyle] = useState({
        backgroundColor: '#b9a3c4', // Initial navbar color
        boxShadow: 'none' // Initial shadow (none)
    });
    const [lastScrollY, setLastScrollY] = useState(0);  // Track the last scroll position
    const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar visibility (for toggle)
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);  // Navbar collapse visibility
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);  // To track if the user is on mobile
    const navbarRef = useRef(null); // Reference to the navbar

    // Check the screen size on mount and window resize
    const checkMobileView = () => {
        setIsMobile(window.innerWidth <= 768); // Set true if the screen size is mobile
    };

    // Handle scroll events
    const handleScroll = () => {
        if (typeof window !== "undefined") {
            if (isMobile) {
                // Mobile view: Hide the navbar on scroll down, show it on scroll up
                if (window.scrollY > lastScrollY) {
                    setIsNavbarVisible(false); // Scrolling down
                } else {
                    setIsNavbarVisible(true); // Scrolling up
                }
            } else {
                // Desktop view: Make navbar transparent with a shadow when scrolling down
                if (window.scrollY > 100) {
                    setNavbarStyle({
                        backgroundColor: 'transparent', // Navbar becomes transparent after scroll down
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' // Adding a subtle shadow for the floating effect
                    });
                } else {
                    setNavbarStyle({
                        backgroundColor: '#b9a3c4', // Reset to original color
                        boxShadow: 'none' // No shadow when at the top
                    });
                }
            }

            setLastScrollY(window.scrollY); // Update last scroll position
        }
    };

    // Add event listener on mount, and cleanup on unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobileView);  // Listen to window resize

        checkMobileView();  // Check screen size when component mounts

        // Close the navbar if user clicks outside
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                // Close the navbar if the click is outside
                setIsNavbarCollapsed(false);
            }
        };

        // Only add event listener for clicks outside when the navbar is open and on mobile
        if (isMobile && isNavbarCollapsed) {
            document.addEventListener('click', handleClickOutside);
        }

        // Cleanup on unmount or when the navbar collapses
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [lastScrollY, isMobile, isNavbarCollapsed]);  // Add dependencies for scroll, mobile view, and navbar state

    // Close the navbar when a link is clicked (only for mobile view)
    const handleLinkClick = (e) => {
        if (isMobile) {
            e.preventDefault(); // Prevent default anchor behavior
            navigate(e.target.pathname); // Redirect to the clicked page
            setIsNavbarCollapsed(false);  // Ensure the navbar collapses after a link is clicked
        } else {
            navigate(e.target.pathname); // Just navigate for desktop
        }
    };

    // Toggle the collapse state for the navbar
    const toggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed); // Toggle collapse state
    };

    return (
        <div>
            <nav 
                className={`navbar navbar-expand-lg fixed-top ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`} 
                style={{
                    backgroundColor: navbarStyle.backgroundColor, 
                    boxShadow: navbarStyle.boxShadow
                }}
                ref={navbarRef} // Assign the navbarRef to the navbar container
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Adventure Tales World</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}  // React controlled toggle
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isNavbarCollapsed ? "true" : "false"} // Dynamically set aria-expanded
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home" onClick={handleLinkClick}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/aboutUs" onClick={handleLinkClick}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/services" onClick={handleLinkClick}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contactUs" onClick={handleLinkClick}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
