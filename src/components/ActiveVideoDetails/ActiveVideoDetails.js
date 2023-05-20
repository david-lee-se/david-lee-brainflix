import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';
import './ActiveVideoDetails.scss';


function ActiveVideoDetails(props) {

const activeVideo = props.videoDetails[0];
const date = new Date(activeVideo.timestamp).toDateString();
    return (
        <div className="video-details">
            <h1 className='video-details__title'>{activeVideo.title}</h1>
            <hr className='divider'/>
            <div className='video-details__social-container'>
                <div className='social'>
                    <p className='social__author'>By {activeVideo.channel}</p>
                    <p className='social__date'>{date}</p>
                </div>
                <div className='social__likes-views-container'>
                    <p className='social__views'>
                        <img className='social__views-icon'src={viewsIcon} alt="views Icon"/>
                        {activeVideo.views}
                    </p>
                    <p className='social__likes'>
                        <img className='social__likes-icon'src={likesIcon} alt="Likes Icon"/>
                        {activeVideo.likes}
                    </p>
                </div>
            </div>
            <hr className='divider'/>
            <div className='description'>
                <p>{activeVideo.description}</p>
            </div>
        </div>
    )
}

export default ActiveVideoDetails;