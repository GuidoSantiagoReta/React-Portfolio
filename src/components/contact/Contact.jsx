
import React from 'react';
import './Contact.css';
import { SiLinkedin, SiGithub} from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (

    <div className='links'>
      <a href="mailto:guidosantiagoreta@gmail.com" alt="correo electrónico"><TfiEmail /></a>
      <a href="https://www.linkedin.com/in/guido-reta" alt="linkedin"><SiLinkedin /></a>
      <a href="https://github.com/GuidoSantiagoReta" alt="github"><SiGithub /></a>
    </div>


  )
}

export default Contact;
