
import React from 'react'
import './Contact.css'
import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    
        <div className='links'>
            <a href="https://twitter.com/guidoreta" alt="twitter"><SiTwitter/></a>
            <a href="https://www.linkedin.com/in/guido-reta" alt="linkedin"><SiLinkedin/></a>
            <a href="https://github.com/GuidoSantiagoReta" alt="github"><SiGithub/></a>
        </div>
      
    
  )
}

export default Contact;
