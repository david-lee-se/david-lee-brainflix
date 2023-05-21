import videos from '../../assets/data/videos.json';
import './VideoList.scss';

function VideoList(props) {

    const handleVideoSelect = (event) => {
        const selectedVideoId = event.target.id;
        props.selectVideo(selectedVideoId)
    }

    
    return (
        <div className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            <ul >
                {videos.map((video) => {
                    if(props.activeVideo.id === video.id) {
                        return "";
                    }else {
                    return (
                        <li key={video.id} onClick={handleVideoSelect} className='video-list__item'>
                            <div id={video.id} className='video-list__image-container'>
                            <img id={video.id}className="video-list__image" src={video.image} alt="video thumbnail"/>
                            </div>
                            <div id={video.id} className='video-list__details-container'>
                                <h2 id={video.id} className='video-list__item-title'>{video.title}</h2>
                                <p id={video.id} className='video-list__item-channel'>{video.channel}</p>
                            </div>
                        </li>
                    )}
                })}
            </ul>
        </div>
    )
}

export default VideoList;