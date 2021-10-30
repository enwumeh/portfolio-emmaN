import React from "react";
import "./../index.css";
import photo from "../images/me-photo.jpeg";
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
        <h1 className="heading" id="about-heading">About me</h1>
        <div>
        <p className="about-speel">
          Hello! I’m Emma and I am a full stack developer who enjoys creating
          unique experiences from scratch. I graduated from Washington
          University in St. Louis in 2020 where I studied Cognitive Brain
          Science. I was on track to be a doctor up until my final year. I
          decided to take a Computer Science course with a friend for fun. The
          course was stimulating and challenging...which entrigued me. <span id="read-more">I decided
          to take a sizable leap of faith and abandon my journey of
          becoming a physician to pursue programming instead. After graduation,
          I took a coding bootcamp to dive into this newfound thing I
          discovered. Lots of learning has commenced, and I am still getting my
          feet wet and eager to learn more useful technology. As a Brain
          Sciences major, I’m able to appreciate the intersection between our
          behavior and software, and exploring that through building interfaces
          is something I have been excited about during my journey.
            Thanks for listening to my story! I’d love to stay connected :)
            </span>{"   "}
            
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
