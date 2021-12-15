import React from 'react';
import "./experience.css";
import Grid from '@material-ui/core/Grid';
import Apple from "../../img/apple.png";
import Facebook from "../../img/facebook.png";
import Netflix from "../../img/netflix.jpg";
import Blackrock from "../../img/blackrock.jpg";
import DTSC from "../../img/dtsc.png";
import BSOE from "../../img/bsoe.png";
import Divider from '@material-ui/core/Divider';
function Experience() {
   return (
    <div className="experience">
      <h1>Experience</h1>
      <div>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6}>
            <h2>Blackrock</h2>
            <h2>Software Engineering Intern</h2>
            Summer 2021
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <img src={Blackrock} className="experience-img"/>
            
            
          </Grid>
            </Grid>
          <Divider/>
          <Grid className="experience-content" container spacing={3}>
          
          <Grid item xs={6}>
            <img src={DTSC} className="experience-img"/>
          </Grid>
          <Grid item xs={6}>
          <h2>DTSC</h2>
          <h2>Software Engineer Student Assistant</h2>
          Fall 2021 - Present
          </Grid>
          </Grid>
          <Divider/>
          <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6}>
          <h2>UC Santa Cruz BSOE</h2>
          <h2>CS Group Tutor</h2>
            Spring 2021
          </Grid>
          <Grid item xs={6}>
            <img src={BSOE} className="experience-img"/>
          </Grid>
        </Grid>
      </div>
      
      
    </div>
  );
}

export default Experience;
