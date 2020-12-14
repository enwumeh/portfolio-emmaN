import React from "react"
import "./../index.css"
import { motion } from "framer-motion"

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
}

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">My Work:</h1>
      <div className="projects-container">
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://enwumeh.github.io/CrimeSpotterEN/"
          >
            <div className="project-images" id="crimeSpotter"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>CrimeSpotter</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/enwumeh/CrimeSpotterEN"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://enwumeh.github.io/CrimeSpotterEN/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2 - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://sportikus.netlify.app//"
          >
            <div className="project-images" id="sportikus"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Sportikus</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/SandyJacobson/sportikus"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://sportikus.netlify.app"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Quiz App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://our-quiz.web.app/"
          >
            <div className="project-images" id="quizApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>FilmFlix</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/enwumeh/filmflix"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://our-quiz.web.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
       {/* Project 2 - Shoe Store */}
       <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://emmas-ecomm-rails.netlify.app/"
          >
            <div className="project-images" id="railsApp"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Simple Rails App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/enwumeh/Emma-s-eCommerce/blob/main/README.md"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://emmas-ecomm-rails.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
       
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/enwumeh"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  )
}

export default Portfolio
