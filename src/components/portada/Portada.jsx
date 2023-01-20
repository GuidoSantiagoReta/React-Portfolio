import React from "react";
import "./Portada.css";
import port from "../../media/port.webm";
import html5 from "../../img/html5.png";
import css3 from"../../img/css3.png";
import javascript from"../../img/javascript.png";
import reacticon from "../../img/react.png";
import Contact from "../contact/Contact.jsx";
import TypeIt from "typeit-react";

const Portada = () => {
  return (
    <div className="portada-container">
  
      <video className="video" src={port} autoPlay loop muted></video>
      <h1>Guido Santiago Reta</h1>
     <p><TypeIt className="typeit-cursor"><span className="html">Front-End</span> Developer | <span className="javascript">JavaScript</span> | <span className="react">React.js</span></TypeIt></p>
      <div className="icons-container">
        <img src={html5} id='rot' alt="html5"/>
        <img src={css3} id='inverse-rotation' alt="ccs3"/>
        <img src={javascript} id='rot' alt="javascrip"/>
        <img src={reacticon} id='inverse-rotation' alt="react"/>
        </div>
        <Contact/>
    </div>
  )
}

export default Portada;
