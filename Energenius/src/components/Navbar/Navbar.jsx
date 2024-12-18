import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/main_logo.png";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";



export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Our Portfolio",
    link: "/portfolio",
  },
  {
    id: 5,
    name: "Our Team",
    link: "/team",
  },
  {
    id: 6,
    name: "Our Blog",
    link: "/bloglist",
  },

];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServiceDiv, setShowServiceDiv] = useState(false); // State to control service div visibility
  // const [userInfo, setUserInfo] = useState("");

  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem('userInfo');
  //   if (storedUserInfo) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //   }
  // }, []);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleServiceHover = () => {
    setShowServiceDiv(true);
  };

  const handleServiceLeave = () => {
    setShowServiceDiv(false);
  };


  return (
    <>
      <div className="main2_back">
        <div className="main_background1"></div>
        <div className="list_back">
          {/* <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <h1 className="icnoe_email">contact@keendroid.com</h1>
            </li>
            <li>
              <i className="fa fa-phone"></i>
              <h1 className="icone_contact"> +91 8239733333, +91 7273933333</h1>
            </li>
            
            <li>
              <a
                href="https://wa.me/7273933333"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare className="text-2xl hover:text-primary duration-300" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/keendroid/?hl=en">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/thekeendroid/">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/keendroid/about/">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className="text-2xl hover:text-primary duration-300" />
              </a>
            </li>
            <li>
              <a href="https://x.com/thekeendroid">
                <FaTwitter className="text-2xl hover:text-primary duration-300" />
              </a>
            </li>
          </ul> */}
        </div>
      </div>

      <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
        <div>
          {/* <link rel="import" href="src/assets/logo/attachment_82387172.png" /> */}
        </div>
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            <div>

            </div>
            {/* Logo section */}
            {/* <Link to={"/"}>
              <img
                src={Logo}
                alt=""
                className="w-5"
                style={{ width: "270px" }}
              />
            </Link> */}

            {/* Desktop view Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => (
                  <li
                    key={id}
                    className="py-4"
                    onMouseEnter={
                      name === "Services" ? handleServiceHover : null
                    }
                    onMouseLeave={
                      name === "Services" ? handleServiceLeave : null
                    }
                  >
                    <Link
                      to={link}
                      className="text-lg font-medium main_navbar_hover1 py-2 transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  </li>

                ))}

                <Link to={"/contact"}>
                  <button
                    style={{ backgroundColor: "#1764a3" }}
                    className="primary-btn"
                  >
                    Get in Touch
                  </button>
                </Link>

              </ul>
            </nav>

            {/* Mobile view Drawer  */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {/* Mobile Hamburger icon */}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} />
      </div>

      {/* Service div */}
      {showServiceDiv && (
        <div
          className="service-dive"
          style={{
            position: "absolute",
            top: "60px",
            right: "0",
            zIndex: "1000",
            width:"700px"
          }}
          onMouseEnter={handleServiceHover}
          onMouseLeave={handleServiceLeave}
        >
          <div
            className="service-div"
            style={{ display: "flex", gap: "20px", fontSize: "12px" }}
          >
            <ul
              className="main_li_ul_design"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h1 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Mobile-devlopment
              </h1>
              <Link to={"/Flutter_Development"}>
                <li>Flutter devlopment </li>
              </Link>
              <Link to={"/App_Development"}>
                <li>App-devlopment </li>
              </Link>

              <Link to={"/Ios_Development"}>
                <li>IOS devlopment </li>
              </Link>
              <Link to={"/App_android"}>
                <li>App-android </li>
              </Link>
            </ul>
            <ul
              className="main_li_ul_design"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <h1 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Web-devlopment
              </h1>
              <Link to={"/React_page"}>
                <li>React-js </li>
              </Link>
              <Link to={"/App_laravel"}>
                <li>Laravel </li>
              </Link>
              <Link to={"/Php_page"}>
                <li>php </li>
              </Link>
            </ul>
            <ul
              className="main_li_ul_design"
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <h1 style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Other serivces
              </h1>
              <Link to={"/Ecommerce"}>
                <li>E-commerce Solution </li>
              </Link>

              <Link to={"/Digital_Marketing"}>
                <li>Digital-Marketing</li>
              </Link>
              {/* <Link to={"/Iot"}>
                <li>Iot</li>
              </Link> */}
              {/* <Link to={"/lms"}>
                <li>LMS</li>
              </Link> */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
