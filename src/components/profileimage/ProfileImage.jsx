import React from 'react';
import './ProfileImage.css';
import profileImage from '../../img/profileimage.jfif';



const ProfileImage = () => {
  return (
  <div className="profileImage">                
    <img src={profileImage}/>
  </div>
  )
}

export default ProfileImage