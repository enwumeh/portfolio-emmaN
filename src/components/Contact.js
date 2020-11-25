import React from "react";
import "./../index.css";

const Contact = () => {
  return (
    <section
      data-aos="zoom-in"
      className="contact-container"
      name="contact"
      id="contact"
    >
      <div className="profile-image">

      </div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            {/* <i className="fas fa-envelope"></i> */}
          </div>
          <div className="contact-text">
            <span className="email-heading">Email</span>
          </div>
          <div className="contact-links">
            <span>e.nwumeh@gmail.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            {/* <i className="fas fa-globe"></i> */}
          </div>
          <div className="contact-text">
            <span className="sm-heading">Social Media</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/enwumeh/"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/emma-nwumeh//"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>

            {/* Instagram */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/so_emmazing//"
            >
              <i
                className="fab fa-instagram"
                title="instagram"
                id="instagram"
              ></i>
            </a>
          </div>
        </div>

        {/* Card 3 - Phone */}
        <div className="cards">
          <div className="contact-icons">
            {/* <i className="fas fa-phone"></i> */}
          </div>
          <div className="contact-text">
            <span className="phone-heading">Phone</span>
          </div>
          <div className="contact-links">
            <span>(708)-382-0399 </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
