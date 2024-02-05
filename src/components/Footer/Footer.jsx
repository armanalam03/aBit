import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="about-company">
        <span className="company-name-footer">
          aBit
        </span>
        <span className="company-description">
          Changing the way in which creators and fans interact.
        </span>
      </div>
      <div className="footer-links">
        <span className="link">
          Home
        </span>
        <span className="link">
          Are you a Creator?
        </span>
        <span className="link">
          Support
        </span>
      </div>
    </div>
  )
}

export default Footer