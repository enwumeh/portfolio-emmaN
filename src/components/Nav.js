import React, { useState } from "react";
import "./../index.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);

  const handleClick = () => {
    setNavClicked(!navClicked);
  };

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <motion.div
      className={navbar ? "nav-container active" : "nav-container"}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      {/* <span className="logo" onClick={() => scroll.scrollToTop()}>
        Emma Nwumeh
      </span> */}
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={handleClick}>
        <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      {/* // */}
      <ul className={ navClicked ? "nav-links active" : "nav-links" }>
        {/* <li className="link">
          <Link
            className={navbar ? "anchor is-active" : "anchor"}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li> */}
        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            ABOUT ME
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="timeline"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            PROGRESS TRACKER
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            SKILLS
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="portfolio"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
           PROJECTS
          </Link>
        </li>

        <li className="link">
          
          <Link
            className="anchor"
            activeClass="active"
            to="contact"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Nav;