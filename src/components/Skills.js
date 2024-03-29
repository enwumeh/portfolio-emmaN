import React from "react";
import "./../index.css";
import Download from "../components/Download";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"   
      id="skills"
    >
      <h1 className="heading">What I Am Good At?</h1>

      <div className="techs">
      <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png" className="skills-img" alt="javascript"></img>
          <p>Javascript</p>
        </li>
        <li>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"className="skills-img" alt="react"></img>
          <p>React</p>
        </li> 
        <li>
          <img src="https://www.nicepng.com/png/detail/749-7492440_ruby-on-rails-logo.png" className="skills-img" alt="ruby"></img>
          <p>Ruby on Rails</p>
        </li>
        <li>
          <img src="https://www.creative-tim.com/blog/content/images/wordpress/2020/03/node-js-736399_1280.png" className="skills-img" alt="node"></img>
          <p>Node JS</p>
        </li>
        <li>
          <img src="https://www.pinclipart.com/picdir/middle/519-5199224_postgresql-logo-png-transparent-clipart.png" className="skills-img" alt="github"></img>
          <p>Postgresql</p>
        </li>
        <li>
          <img src="https://miro.medium.com/max/2732/1*mtsk3fQ_BRemFidhkel3dA.png" className="skills-img" alt="github"></img>
          <p>Git/Github</p>
        </li>
      </div>
      <p id="resume-text">
      See my resume for more:
      </p>
      
      <Download/>
    </section>
  );
};

export default Skills;
