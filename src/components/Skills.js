import React from "react";
import "./../index.css";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>

      <div className="techs">
      <li>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
        </li>
        <li>
          <i className="fab react fa-react"></i>
          <p>React</p>
        </li> 
        
        <li>
          <img src="data:image/png;base64,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" className="skills-img"></img>
          <p>Git/Github</p>
        </li>
        <li>
          <img src="images/rails.png" className="skills-img fab sass fa-sass"></img>
          <p>Ruby on Rails</p>
        </li>
        <li>
          <i className="fab bootstrap fa-bootstrap"></i>
          <p>Bootstrap</p>
        </li>
        
        
      </div>
    </section>
  );
};

export default Skills;
