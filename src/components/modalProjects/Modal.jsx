import React from 'react'
import './Modal.css'
import PortfolioCards from '../portfoliocards/PortfolioCards'
import {FaWindowClose} from 'react-icons/fa';
import 'animate.css';

const Modal = ({isOpen, closeModal, children}) => {

  return (
   
      <div className={` animate__animated animate__fadeIn modal ${isOpen && 'open-modal'}`}>    
       <div className='modal_content'>
        <h2  onClick={closeModal}><FaWindowClose className='close hvr-shrink'/></h2>
        {children}
       {/*modal-projects */}
      <PortfolioCards/>
      </div>
     </div>
      
      
    
  )

}


export default Modal
