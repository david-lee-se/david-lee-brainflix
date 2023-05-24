import './Home.scss';
import Comments from '../components/Comments/Comments';
import CommentForm from '../components/CommentForm/CommentForm';
import VideoList from '../components/VideoList/VideoList';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import ActiveVideoDetails from '../components/ActiveVideoDetails/ActiveVideoDetails';
import { useState } from 'react';
import videoDetails from '../assets/data/video-details.json';

function Home(props) {

    
const [activeVideo, setActiveVideo] = useState([]);
  

const selectVideo = (videoId) => {
              
                  videoDetails.map((video) => {
                      if(video.id === videoId) {
                        setActiveVideo(video)
                      }else {
                        return ""
                      }
                  })      
                 }
    return(
        <>
            <VideoPlayer activeVideo={activeVideo}/>
      <div className='list-details-container'>
        <div className='details-container'>
          <ActiveVideoDetails 
            videoDetails={videoDetails}
            activeVideo={activeVideo}
          />
          <CommentForm avatar={props.avatar}/>
          <Comments 
            videoDetails={videoDetails}
            activeVideo={activeVideo}
          />
        </div>
        <div className='list-container'>
          <VideoList 
            videoDetails={videoDetails}
            activeVideo={activeVideo}
            selectVideo={selectVideo}
          />
        </div>
      </div>
        </>
    )
}

export default Home;
