import React from "react";
import "./Portada.css";
import port from "../../media/cart.webm";
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import reacticon from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import angular from "../../assets/angular.png"
import csharp from "../../assets/csharp.png";
import Contact from "../contact/Contact.jsx";
import TypeIt from "typeit-react";
import Modal from "../../components/modalProjects/Modal";
import useModal from "../../hooks/useModal";
import ProfileImage from "../profileimage/ProfileImage.jsx";


const icons = [
  { src: html5, id: 'rot', alt: "html5" },
  { src: css3, id: 'inverse-rotation', alt: "css3" },
  { src: javascript, id: 'rot', alt: "javascript" },
  { src: reacticon, id: 'inverse-rotation', alt: "react" },
  { src: node, id: 'rot', alt: "node" },
  { src: angular, id:'inverse-rotation', alt: "angular"},
  { src: csharp, id: 'rot', alt: "csharp" }


];

const Portada = () => {

  const [isOpenModal, openModal, closeModal] = useModal();
  return (
    <div className="portada-container">

      <video className="video" src={port} autoPlay loop muted preload="auto"></video>
      <ProfileImage />
      <h1>Guido Santiago Reta</h1>
      <p><TypeIt className="typeit-cursor" options={{ loop: true }}><span className="html">Developer</span> | <span className="javascript">Js</span> | <span className="react">React.js</span> | <span className="node">Node.js</span> | <span className="angular">Angular</span> | <span className="csharp">C#</span></TypeIt></p>
      <div className="icons-container">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            id={icon.id}
            alt={icon.alt}
          />
        ))}
      </div>
      <button className="projects-btn hvr-pulse-shrink" onClick={openModal}>
        <h4>Projects</h4>
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal} />
      <Contact />
    </div>
  )
}

export default Portada;
