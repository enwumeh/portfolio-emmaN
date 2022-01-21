import React from "react";
import "./../index.css";
import photo from "../images/me-photo.jpg";
import { Link } from "react-scroll";

const About = () => {


  return (
    <section
      // data-aos="flip-left"
      className="about-container"
      name="about"
      id="about"
    >
      <div className="me">
      <div className="main-text">
        <h1 className="heading" id="about-heading">About me</h1>
        
        <p className="about-speel">
          Hello! I’m Emma and I am a full stack developer. I graduated from Washington
          University in St. Louis in 2020 where I studied Cognitive Brain
          Science. I was on track to be a doctor up until my final year. I
          decided to take a Computer Science course with a friend for fun. The
          course was stimulating and challenging...which entrigued me. I decided
          to take a sizable leap of faith and abandon my journey of
          becoming a physician to pursue programming instead.  <span id="extra-content" className="extra-content" >After graduation,
          I took a coding bootcamp to get a better introduction. Lots of learning has commenced, and I am still getting my
          feet wet and eager to learn more useful technology. As a Brain
          Sciences major, I’m able to appreciate the intersection between our
          behavior and software, and exploring that through building interfaces
          is exciting.
            Thanks for listening to my story! I’d love to stay connected :)
            </span>
            
       <Link to="contact" className="email-link-about">
          Reach out!
          </Link>
        </p>
        </div>
          <div id="me-div">
          <img id="me-photo" src={photo} alt="me" />
        </div>
      </div>
    </section>
  );
};

export default About;
