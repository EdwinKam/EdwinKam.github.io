import React from 'react';
import "./about.css";
import Me from "../../img/melight.jpg";
function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img className="about-img"
              src={Me} alt="haha"/>
        </div>
      </div>
      <div className="about-right">
          <h1>About</h1>
          <h3>Hi My name is Edwin. I will graduate in June 2022. I love singing and traveling.</h3>
      </div>
    </div>
  );
}

export default About;
