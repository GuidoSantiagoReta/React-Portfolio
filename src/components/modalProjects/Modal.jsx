import React from 'react'
import './Modal.css'
import PortfolioCards from '../portfoliocards/PortfolioCards'
import {FaWindowClose} from 'react-icons/fa';


const Modal = ({isOpen, closeModal, children}) => {

  return (
   
      <div className={`modal ${isOpen && 'open-modal'}`}>    
       <div className='modal_content'>
     
        <h2  onClick={closeModal}><FaWindowClose className='close'/></h2>
        
        {children}
       {/*modal-projects */}
      <PortfolioCards/>
       
     
      
      </div>
      </div>
      
      
    
  )

}


export default Modal
