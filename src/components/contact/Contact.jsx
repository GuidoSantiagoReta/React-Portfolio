
import React from 'react';
import './Contact.css';
import { SiLinkedin, SiGithub, SiInstagram} from "react-icons/si";

const Contact = () => {
  return (
    
        <div className='links'>
            <a href="https://www.instagram.com/s3guido" alt="instagram"><SiInstagram/></a>
            <a href="https://www.linkedin.com/in/guido-reta" alt="linkedin"><SiLinkedin/></a>
            <a href="https://github.com/GuidoSantiagoReta" alt="github"><SiGithub/></a>
        </div>
     
    
  )
}

export default Contact;
