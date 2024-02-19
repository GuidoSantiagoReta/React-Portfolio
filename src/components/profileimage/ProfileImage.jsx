import React from 'react';
import './ProfileImage.css';
import profileImage from '../../img/profileimage.jfif';


//probando cambios 
const ProfileImage = () => {
  return (
  <div className="profileImage">                
    <img src={profileImage}/>
  </div>
  )
}

export default ProfileImage