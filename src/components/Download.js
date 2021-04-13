import React from 'react';
import resume from "./../images/enResume3-21.pdf";


const Download = () => {


    return (
      <div className = "App">
        <a href = {resume} target = "_blank" rel="noopener noreferrer">Download</a>
      </div>
    );
  }


export default Download;