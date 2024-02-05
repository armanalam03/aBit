import React, {useState} from 'react'
import './Releases.css'
import ReleaseCard from '../ReleaseCard/ReleaseCard'

function Releases({releasesData}) {
  const [cardData, setCardData] = useState([
    {
      title: "The Sound of Silence",
      image: "https://s3-alpha-sig.figma.com/img/87c0/3d4c/1a546c66ea689708d7a03042db7eb340?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ULW4opCyBNR4gglbz5riXHrd9nhVXO2wbmK0BZbMIQBinj1i4IrB2yZuXnAiiDQHc6NDb~Btxti3vgWPw93IgFb3TWODD-M8AmnXQmo9HSB1ht595J4w-ztExu-mKtFIAIjphRslFPSKhXljVLQ4hg2~emFvAzsqBzjgMP810YQVzhR9Hig-vSa7D-IFdCsSjNl4liESfq04FvX8C2NbHmy7ugM4jRALpzFZ7myE3wsuxoAO~65ijEdPeuHe6gHXGTzhvJiH3Af7WTd7EG3urWPXpcoLXFycq8021QzzWW1wSuv-Bjr3a5JgCYbfBuetaybOzJu6YQCLdtycyBJLkA__",
      shares: 317,
      offered: "75%",
      raised: releasesData.fundsRaised
    },
  ]);
  return (
    <div className="releases-container">
      <div className="dashboard-stats-container">
        <div className="description">
          <span className="heading">
            Releases
          </span>
          <span className="sub-heading">
            Videos that you upload in collaboration with aBit appear here.
          </span>
        </div>
        <div className="stats">
          <span className="stats-count">{releasesData.sharedVideos}</span>
          <span className="stats-text">Shared Videos</span>
        </div>
        <div className="stats">
          <span className="stats-count">{releasesData.fundsRaised}</span>
          <span className="stats-text">Funds
Raised</span>
        </div>
        <div className="stats">
          <span className="stats-count">{releasesData.coownerCommunity}</span>
          <span className="stats-text">Co-owner community</span>
        </div>
        <div className="stats">
          <span className="stats-count">{releasesData.coownerEarnings}</span>
          <span className="stats-text">Co-owner earnings</span>
        </div>
      </div>
      <div className="release-cards-container">
        <ReleaseCard isEmpty={true} />
        {cardData.map((card, index) => {
          return <ReleaseCard key={index} cardData={card} isEmpty={false} />
        })}
      </div>
    </div>
  )
}

export default Releases