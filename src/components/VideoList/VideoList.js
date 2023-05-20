import videos from '../../assets/data/videos.json';
import './VideoList.scss';

function VideoList(props) {
    console.log(videos)
    return (
        <div className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            <ul >
                {videos.map((video) => {
                    if(props.activeVideo.id === video.id) {
                        return "";
                    }else {
                    return (
                        <li key={video.id} className='video-list__item'>
                            <div className='video-list__image-container'>
                            <img className="video-list__image" src={video.image} alt="video thumbnail"/>
                            </div>
                            <div className='video-list__details-container'>
                                <h2 className='video-list__item-title'>{video.title}</h2>
                                <p className='video-list__item-channel'>{video.channel}</p>
                            </div>
                        </li>
                    )}
                })}
            </ul>
        </div>
    )
}

export default VideoList;