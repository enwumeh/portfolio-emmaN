import React from "react";
import "./../index.css";

const About = () => {
  return (
    <section
      data-aos="flip-left"
      className="about-container"
      name="about"
      id="about"
    >
      <div className="me">
        <h1 className="heading">About me</h1>
        <p className="about-speel">Hello! I’m Emma and I am a full stack developer. I love creating unique user experiences from scratch! I graduated from Washington University in St. Louis this past May, where I studied Cognitive Brain Sciences— I was on track to be a doctor up until the beginning of my final year. I had a few graduation credits left and I decided to take an Intro to Computer Science course with a friend.  The course was thrilling and challenging...I wanted more! I decided to take a sizable leap of faith and abandon my longtime journey of becoming a physician to pursue programming instead. Shortly after graduation, I enrolled into a coding bootcamp to dive into this newfound thing I discovered. I spent 12 weeks learning full stack development, and lots of frameworks and algorithms later, I am still getting my feet wet and eager to learn more of the latest tech trends, and become a better technologist. As a Brain Sciences major, I’m able to appreciate the intersection between human behavior and technology, and exploring that through building user facing interfaces is something I have been excited about during this journey so far.  Thanks for listening to my story! I’d love to stay connected :)</p>
        <br></br>
        <a className='email-link-about' href="#Contact-me">Reach out!</a>
         
      </div>
    </section>
  );
};

export default About;
