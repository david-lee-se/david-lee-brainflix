import Header from './components/Header/Header';
import './App.scss';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import ActiveVideoDetails from './components/ActiveVideoDetails/ActiveVideoDetails';
import { useState } from 'react';
import videoDetails from './assets/data/video-details.json';
import videos from './assets/data/videos.json';


function App() {
console.log(videoDetails)
const [activeVideo, setActiveVideo] = useState(videoDetails[0]);
  return (
    <div className="App">
      <Header/>
      <VideoPlayer activeVideo={videos}/>
      <ActiveVideoDetails videoDetails={videoDetails}/>
    </div>
  );
}

export default App;
