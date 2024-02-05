import React from 'react'
import './Navbar.css'

function Navbar({profilePhoto}) {
  return (
    <div className="navbar">
      <span className="company-name">
        aBit
      </span>
      <div className="navbar-aside">
        <div className="share-video-btn">
          Share new video
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/e429/0fe3/3cf727787d97b30f43e9d5d593811c05?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FD-7ktgCPAxgnBXWLdPcAswLkzSr4-NglEIuZyuwCsujs-agfOQf50gXBK2MG6lVSmyguIvqEZjZaRuTBOdpZ~T6YYrxb7nCWAyf1ISGqPlV5sL7ppfVamowAew00q94Ui1X2PwhRHgXG8xzmtMwRAbDcKAzy2J8kbMtrVfYUeRAjyzSY8GIVjIFfy6hr-3uFkzJTOUJGFu27OR8Zs5asOCXueWy1RLsp~TTYIwp0a2DeZOm15EYaWYM46A~IIiwmqQmhSHAkFkhhoihJfZV3JARWa4ErGhPVvpc3ztEza~S-DF9SnnylSjxaXlIUwVTQCQWCkxgjcwfwckkOwDlZw__" alt="wallet" className='wallet-icon icon' />
        <img src="https://s3-alpha-sig.figma.com/img/d4b0/9a75/31214bab4d4da0e74f722e59ea7df6a7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbFeCPbV9IvtDXl01Uoj5liGX88oN979CTaO6Wqhr5ne~MKiZWhhP0Pc6TnpxrYDQBBZez2ejb3HaJ-ds8bt3~~MkWCoMz8n3KNp6Yi6Hx3rNpAYnvBGwXDdQ~WggD3QfuD9NjSVIkucrNZkbJJu4wORM53C1UgdbVMxs~JETXxVOG5dhuN2iOL9xJQQ26ml9Lud-mQYaS4cx-m1ZFqdkGALylLMJiKcxl9xhmxpQqEO7TwIDpO~ptGt~7r0fU16KFQylmdmJjwwWJm5Mcfmn5M~TkKiteY2WMcN8d~90j~lin1fsirdTgvZ4plopR2x4kf8RzusM8SJa~qlh-S9BQ__" alt="notifications" className='notification-icon icon' />
        <img src={profilePhoto} alt="profile" className='profile-icon icon' />
        <img src="https://s3-alpha-sig.figma.com/img/77f1/bcd4/30c1e1ab750b92d3674e360cc2c1876a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mvElHSjz04rxGzEzXgxMQ4GrYe3T1w4C9pMaKzb1B3xgkzeiyrh8efLpJv8a~Y9G3MYG0YI689vc86FMqR~hf5CqsYpgGrNENkQj80emt~0cwmv2t9ypCOZatIn8aH8Hs7l9oSOo3ZstDn6~-hXC~Xvbiwcj6QETE5q2NB6cjmtM6Q6an88jqPkXAmJ1u1EpRBpy2FA~txeVuwchaq42jttBBsLhkZmfDWmOO8LnDzicOefUrEc6~xDBSwhtzqxHIzGeY2ZHa6UW~uJ-yd2-ecIvej~YOWo0C9lmBqmHaPYuVTVPcPfYUcHaL7RmEXOiS6iaBxOJJZm7XbZMrK6ypw__" alt="more" className='more-icon icon' />
      </div>
    </div>
  )
}

export default Navbar