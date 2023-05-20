import Header from './components/Header/Header';
import './App.scss';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import ActiveVideoDetails from './components/ActiveVideoDetails/ActiveVideoDetails';
import { useState } from 'react';
import videoDetails from './assets/data/video-details.json';

import Comments from './components/Comments/Comments';
import CommentForm from './components/CommentForm/CommentForm';
import avatar from './assets/images/Mohan-muruge.jpg';
import VideoList from './components/VideoList/VideoList';

function App() {

const [activeVideo, setActiveVideo] = useState(videoDetails[0]);
  return (
    <div className="App">
      <Header avatar={avatar}/>
      <VideoPlayer activeVideo={activeVideo}/>
      <ActiveVideoDetails videoDetails={videoDetails}/>
      <CommentForm avatar={avatar}/>
      <Comments 
        videoDetails={videoDetails}
        activeVideo={activeVideo}
        setActiveVideo={setActiveVideo}
      />
      <VideoList activeVideo={activeVideo}/>
    </div>
  );
}

export default App;
