import React, { useEffect } from "react";
import "./../index.css";
import ScrollToTop from "./ScrollToTop";

import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
// import Services from "../components/Services";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    // <div className="main-container">

      <ScrollToTop>
        <Home />
        {/* <div className="about-pad"> */}
        <About />
        {/* </div> */}
      {/* <Services /> */}
      <Skills />
      <Portfolio />
      <Contact />
        <Footer />
        </ScrollToTop>
    // </div>
  );
}

export default Main;
