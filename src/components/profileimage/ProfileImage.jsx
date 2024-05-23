import React from 'react';
import './ProfileImage.css';
import profileImage from '../../assets/profileimage.jfif';



const ProfileImage = () => {
  return (
    <div className="profileImage">
      <img src={profileImage} alt="" />
    </div>
  )
}

export default ProfileImage