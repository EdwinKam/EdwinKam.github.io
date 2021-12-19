import React from 'react';
import "./experience.css";
import Grid from '@material-ui/core/Grid';
import Apple from "../../img/apple.png";
import Facebook from "../../img/facebook.png";
import BSOE from "../../img/bsoe.png";
import DTSC from "../../img/dtsc.png";
import Netflix from "../../img/netflix.jpg";
import Blackrock from "../../img/blackrock.jpg";
import Slider from "./Slider";
import Divider from '@mui/material/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FaReact, FaDiscord, FaGithub, FaMapMarkedAlt, FaJava, FaDocker } from "react-icons/fa";
import { SiElectron, SiApachesolr, SiSpringboot, SiSequelize,SiApachemaven } from "react-icons/si";

//card header should be the same length as the centent
const cardHeaderProject = [
  "Technologies used","Job Description","Project"
]

const cardHeader = [
  "Technologies used","Job Description"
]
const blackrockData = [
  <ul>
    <li>React</li>
    <li>Java</li>
    <li>Springboot</li>
    <li>Solr</li>
    <li>Maven</li>
    <li>Electron</li>
  </ul>,
  <ul>
    <li>Designed and implemented an internal-use webapp(ADL Visualizer) and assisted with building a VS Code plugin.</li>
    <li>Replaced the old PHP ADL visualizer with a easy-to-maintain code base and intuitive GUI using React.js</li>
  </ul>,
  <div className="experience-projectlink">
    <a href="#project">
      <SiApachemaven className="experience-icon"/>
    </a>
    <p>Aladdin Database Visualizer</p>
  </div>
];

const dtscData = [
  <ul>
    <li>React</li>
    <li>Eris ArcGis</li>
  </ul>,
  <ul>
    <li>Built new features to improve the UX for the Hazardous Waste
Management Program in the DTSC official website.</li>
    <li>Created a map for the website to assist users to look up HWMP
facilities by their specified locations by sketching on the map. </li>
  </ul>,
  <div className="experience-projectlink">
    <a href="#project">
      <FaMapMarkedAlt className="experience-icon"/>
    </a>
    <p>CalEnviroScreen Map</p>
  </div>
];

const bsoeData = [
  <ul>
    <li>C</li>
    <li>Unix</li>
    <li>Data Structure and Algorithm</li>
    <li>Git</li>
  </ul>,
  <ul>
    <li>Held tutoring sessions for the C programing course. Mainly
focused on Data Structure and Algorithm.</li>
    <li>Trouble Shooting with students having difficulty connecting
the UCSC Unix server.
</li>
  </ul>
];

function Experience() {
   return (
    <div className="experience">
      <Typography variant="h3">Experience</Typography>
      <div>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6} className="experience-grid">
          <Typography variant="h4">Blackrock</Typography>
            <p>Software Engineering Intern</p>
            <p>Summer 2021</p>
            <Slider className="experience-card" data={blackrockData} header={cardHeaderProject}/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <a href="https://www.blackrock.com/us/individual" target="_blank" rel="noreferrer">
              <img src={Blackrock} alt="blackrock logo" className="experience-img"/>
            </a>
          </Grid>
        </Grid>
        <Divider/>
        <Grid className="experience-content" container spacing={3}>
          <Grid item xs={6} className="experience-grid">
          <a href="https://dtsc.ca.gov/" target="_blank" rel="noreferrer">
            <img src={DTSC} alt="dtsc logo" className="experience-img"/>
          </a>
          </Grid>
          <Grid item xs={6} className="experience-grid">
          <Typography variant="h4">Department of Toxic Substances Control</Typography>
            <p>Software Engineering Student Assistant</p>
            <p>Fall 2021 - Present</p>
            <Slider className="experience-card" data={dtscData} header={cardHeaderProject}/>
          </Grid>
        </Grid>
        <Divider/>
        <Grid className="experience-content" container spacing={3}>
        <Grid item xs={6} className="experience-grid">
          <Typography variant="h4">BSOE</Typography>
            <p>CSE Group Tutor</p>
            <p>Spring 2021</p>
            <Slider className="experience-card" data={bsoeData} header={cardHeader}/>
          </Grid>
          <Grid item xs={6} className="experience-grid">
            <a href="https://engineering.ucsc.edu/" target="_blank" rel="noreferrer">
              <img src={BSOE} alt="BSOE logo" className="experience-img"/>
            </a>
            
          </Grid>
        </Grid>
      </div>
      
      
    </div>
  );
}

export default Experience;
