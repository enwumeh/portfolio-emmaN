import React, { Component } from 'react';
import resume from "./../images/enResume11-20.pdf";


const Download = () => {


    return (
      <div className = "App">
        <a href = {resume} target = "_blank">Download</a>
      </div>
    );
  }


export default Download;