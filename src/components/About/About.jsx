import React from 'react'
import UserCard from '../UserCard/UserCard'
import './About.css'

function About({userData}) {
  return (
    <div className="about-container">
      <div className="cover-photo-container"></div>
      <div className="band">
        <span className="band-text">
          John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now
        </span>
      </div>
      <UserCard userData={userData} />
    </div>
  )
}

export default About