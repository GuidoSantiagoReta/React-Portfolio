
import React from 'react'
import './Contact.css'
import { SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    
        <div className='links'>
            <a href="https://wa.me/541133232885" alt="whats app"><SiWhatsapp/></a>
            <a href="https://www.linkedin.com/in/guido-reta" alt="linkedin"><SiLinkedin/></a>
            <a href="https://github.com/GuidoSantiagoReta" alt="github"><SiGithub/></a>
        </div>
      
    
  )
}

export default Contact;
