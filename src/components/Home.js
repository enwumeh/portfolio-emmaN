import React, { useState, useEffect } from "react";
import "./../index.css";
import me from "./../images/me-icon.jpeg";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import Nav from "../components/Nav";
import skyline from "../images/pinkskyline.jpeg";

const contentVariants = {
  initial: {
    translateY: "100vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

// const childrenVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },

//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       type: "spring",
//       delay: 0.5,
//     },
//   },

//   exit: {
//     opacity: 0,
//     y: -200,
//     transition: { duration: 0.2 },
//   },
// };

const Home = () => {
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingTwo(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);

  return (
    <div className="home-container" id="home" name="home">
      <img id="skyline" src={skyline} alt="skyline" />

      <div className="home-text">
      <h1 className="main-content">
        Emmanuela
        <motion.span
          drag={true}
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          className="hand"
          animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
          transition={{ yoyo: Infinity, duration: 1.7 }}
        >
          {/* <span role="img" aria-label="Hand waving">
              👋🏾
            </span> */}
        </motion.span>
      </h1>
      {/* <motion.div
        className="content-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      > */}
        {/* <h4 className="welcome-content">WELCOME TO MY WORLD</h4> */}
        <br />
        <div id="im-emma"> Full Stack Developer </div>

        {/* <button className="button" onClick={() => scroll.scrollToBottom()}>
          Contact Me
        </button> */}
      <Nav />
      </div>
      {/* </motion.div> */}

      {/* <motion.div
        className="svg-container"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="svg" src={me} alt="" />
      </motion.div>  */}
    </div>
  );
};

export default Home;
