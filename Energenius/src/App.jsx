import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contacts/Contact";
// import About from "./components/servicess/Services";
import Service from "./components/servicess/Service";
import About from "./components/about/About";
import Cblogs from "./components/Createblog/Cblogs";
// import blogsd from "./components/Blogs/BlogsDetails";
import Team from "./components/Teamspage/Team.JSX";
// import Teamm from "./components/Teamspage/teammmm";
import BlogsDetails from "./components/Blogs/BlogsDetails";
import Terms from "./components/Privacy/Terms";
import CancellationRefund from "./components/Privacy/CancellationRefund";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import Portfolio from "./components/Portfolio/Portfolio";
import Iot from "./components/Services/ServicesTypes/Iot";
import Development from "./components/Services/ServicesTypes/Development";
import Lms from "./components/Services/ServicesTypes/Lms";
import App_Development from "./components/Services/ServicesTypes/app_Development";
import App_android from "./components/Services/ServicesTypes/App_android";
import Flutter_Development from "./components/Services/ServicesTypes/Flutter_Development";
import Ios_Development from "./components/Services/ServicesTypes/Ios_Development";
import Ecommerce from "./components/Services/ServicesTypes/Ecommerce";
import App_laravel from "./components/Services/ServicesTypes/App_laravel";
import Digital_Marketing from "./components/Services/ServicesTypes/Digital_Marketing";
import Php_page from "./components/Services/ServicesTypes/Php_page";
import React_page from "./components/Services/ServicesTypes/React_page";
import Login from "./components/Login/Login";
import Addblog from "./components/Addblog/Addblog";
import Editblog from "./components/Addblog/Editblog";
import Blog from "./components/Bloglist/Blog";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",                    
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/team" element={<Teamm/>} /> */}
        <Route exact path="/team" element={<Team />} />
        <Route path="/blogsdetail/:cid" element={<BlogsDetails />} />
        <Route exact path ="/terms" element = {<Terms/>}/>
          <Route exact path ="/cancellationrefund" element = {<CancellationRefund/>}/>
          <Route exact path ="/privacyPolicy" element = {<PrivacyPolicy/>}/>
          <Route exact path ="/portfolio" element = {<Portfolio/>}/>
          <Route exact path ="/Iot" element = {<Iot/>}/>
          <Route exact path ="/Development" element = {<Development/>}/>
          <Route exact path ="/Lms" element = {<Lms/>}/>
          <Route exact path ="/App_Development" element = {<App_Development/>}/>
          <Route exact path ="/App_android" element = {<App_android/>}/>
          <Route exact path ="/Flutter_Development" element = {<Flutter_Development/>}/>
          <Route exact path ="/Ios_Development" element = {<Ios_Development/>}/>
          <Route exact path ="/Ecommerce" element = {<Ecommerce/>}/>
          <Route exact path ="/App_laravel" element = {<App_laravel/>}/>
          <Route exact path ="/Digital_Marketing" element = {<Digital_Marketing/>}/>
          <Route exact path ="/Php_page" element = {<Php_page/>}/>
          <Route exact path ="/React_page" element = {<React_page/>}/>
          {/* <Route exact path ="/adminLogin" element = {<Login/>}/> */}
          <Route exact path ="/addblog" element = {<Addblog/>}/>
          <Route exact path ="/bloglist" element = {<Blog/>}/>
          <Route exact path ="/blogedit/:id" element = {<Editblog/>}/>
     
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
