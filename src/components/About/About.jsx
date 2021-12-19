import React from 'react';
import "./about.css";
import Me from "../../img/mk.jpg";
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
          <h3>Where am I from?</h3>
          <p>Hong Kong.</p>
          <h3>What do I like to do?</h3>
          <p>Singing, Traveling</p>
          <h3>Sport?</h3>
          <p>Snooker</p>
      </div>
    </div>
  );
}

export default About;
