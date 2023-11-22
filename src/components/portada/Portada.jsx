import React from "react";
import "./Portada.css";
import port from "../../media/cart.webm";
import html5 from "../../img/html5.png";
import css3 from"../../img/css3.png";
import javascript from"../../img/javascript.png";
import reacticon from "../../img/react.png";
import Contact from "../contact/Contact.jsx";
import TypeIt from "typeit-react";
import Modal from "../../components/modalProjects/Modal";
import useModal from "../../hooks/useModal";

const Portada = () => {

  const [isOpenModal, openModal, closeModal] = useModal();
  return (
    <div className="portada-container">
  
      <video className="video" src={port} autoPlay loop muted></video>
      <h1>Guido Santiago Reta</h1>
     <p><TypeIt className="typeit-cursor" options={{loop: true}}><span className="html">Frontend</span> Developer | <span className="javascript">JavaScript</span> | <span className="react">React.js</span></TypeIt></p>
      <div className="icons-container">
        <img src={html5} id='rot' alt="html5"/>
        <img src={css3} id='inverse-rotation' alt="ccs3"/>
        <img src={javascript} id='rot' alt="javascrip"/>
        <img src={reacticon} id='inverse-rotation' alt="react"/>
        </div>
        
        <button className="projects-btn hvr-pulse-shrink" onClick={openModal}>
        <h4>Projects</h4>
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal} />
      <Contact/>
    </div>
  )
}

export default Portada;
