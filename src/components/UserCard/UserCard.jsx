import React from 'react'
import './UserCard.css'

function UserCard({userData}) {
  return (
    <div className="user-card">
      <img src={userData.profilePhoto} alt="user" className="user-profile-image" />
      <div className="user-info-container">
        <div className="user">
          <span className="user-name">{userData.name}</span>
          <span className="user-firm">{userData.firm}</span>
        </div>
        <div className="user-bio">
          <span className="bio-heading">Bio</span>
          <span className="bio">{userData.bio}</span>
        </div>
        <div className="user-role-container">
          <div className="user-role">
            <span>{userData.role}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard