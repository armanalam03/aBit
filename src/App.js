import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Releases from './components/Releases/Releases';
import Footer from './components/Footer/Footer';

function App() {
  const [releasesData, setReleasesData] = useState({
    sharedVideos: 1,
    fundsRaised: "$9510",
    coownerCommunity: 317,
    coownerEarnings: "$3804"
  });

  const [userData, setUserData] = useState({
    name: "John Bill",
    firm: "/Johny_Films/",
    bio: "Simply a film fan creating original content for YouTube. Let’s Collaborate.",
    role: "Creator",
    profilePhoto: "https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGLyWnTlGCGuydtH6vvOScdkyET4THiymHYdeVzff~xM6cTAPGOEw8CHlmgB4P-yy5gqMOyFb6HQfsPLP-WgYMjQ4tSkDT~YKmAjfNIe3pK-EYUyb9c2mW7XgbvLE-AV1~nGL1amZPaCocRjBNCucSVi-wfsPqGtImufYVpSksmdHtfmNnJXv5LWSiONBX9bOvpQLEoHIL0OHOYNPDuwgKzgs-8pHcDLfuHpjP66J3ffOvbVa5--FQNnE36kn3Oqlp4ohMARpDIIncllMMIYLSWMX89lXmG5MOSDQxwVUUtprZFB4D8nfd2llOu8sdIyP2Jmo-g7tIYNDFAfUvHn7A__"
  });

  return (
    <div className="App">
      <Navbar profilePhoto={userData.profilePhoto} />
      <About userData={userData} />
      <Releases releasesData={releasesData} />
      <Footer />
    </div>
  );
}

export default App;
