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
  

  const selectVideo = (videoId) => {
                
                    videoDetails.map((video) => {
                        if(video.id === videoId) {
                          setActiveVideo(video)
                        }else {
                          return ""
                        }
                    })      
                   }
      
  return (
    <div className="App">
      <Header avatar={avatar}/>
      <VideoPlayer activeVideo={activeVideo}/>
      <div className='list-details-container'>
        <div className='details-container'>
          <ActiveVideoDetails 
            videoDetails={videoDetails}
            activeVideo={activeVideo}
          />
          <CommentForm avatar={avatar}/>
          <Comments 
            videoDetails={videoDetails}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
          />
        </div>
        <div className='list-container'>
          <VideoList 
            videoDetails={videoDetails}
            activeVideo={activeVideo}
            setActiveVideo={setActiveVideo}
            selectVideo={selectVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
