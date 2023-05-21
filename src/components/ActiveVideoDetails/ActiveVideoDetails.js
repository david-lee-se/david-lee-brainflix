import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';
import './ActiveVideoDetails.scss';


function ActiveVideoDetails(props) {


const date = new Date(props.activeVideo.timestamp).toDateString();
    return (
        <div className="video-details">
            <h1 className='video-details__title'>{props.activeVideo.title}</h1>
            <hr className='divider'/>
            <div className='video-details__social-container'>
                <div className='social'>
                    <p className='social__author'>By {props.activeVideo.channel}</p>
                    <p className='social__date'>{date}</p>
                </div>
                <div className='social__likes-views-container'>
                    <p className='social__views'>
                        <img className='social__views-icon'src={viewsIcon} alt="views Icon"/>
                        {props.activeVideo.views}
                    </p>
                    <p className='social__likes'>
                        <img className='social__likes-icon'src={likesIcon} alt="Likes Icon"/>
                        {props.activeVideo.likes}
                    </p>
                </div>
            </div>
            <hr className='divider'/>
            <div className='description'>
                <p>{props.activeVideo.description}</p>
            </div>
        </div>
    )
}

export default ActiveVideoDetails;