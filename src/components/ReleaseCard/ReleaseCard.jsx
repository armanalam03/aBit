import React from 'react'
import './ReleaseCard.css'

function ReleaseCard({cardData, isEmpty}) {
  return (
    <>
      {isEmpty ? (<div className="release-card-empty">
        <span className="add-icon">+</span>
        <span className="card-description">
          You haven’t uploaded any videos with aBit yet. Add now!
        </span>
      </div>) : (
        <div className="release-card">
          <span className="card-title">
            {cardData.title}
          </span>
          <div className="card-stats-footer">
            <div className="card-stat">
              <span className="card-stat-heading">
                Shares
              </span>
              <span className="card-stat-count">
                {cardData.shares}
              </span>
            </div>
            <div className="card-stat">
              <span className="card-stat-heading">
                Offered
              </span>
              <span className="card-stat-count">
                {cardData.offered}
              </span>
            </div>
            <div className="card-stat">
              <span className="card-stat-heading">
                Raised
              </span>
              <span className="card-stat-count">
                {cardData.raised}
              </span>
            </div>
          </div>
          <img src={cardData.image} alt="" className="card-bg-image" />
        </div>
      )}
    </>
  )
}

export default ReleaseCard