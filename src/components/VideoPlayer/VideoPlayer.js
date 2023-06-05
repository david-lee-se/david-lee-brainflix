import './VideoPlayer.scss';

function VideoPlayer(props) {

let thumbnail=props.activeVideo.image;

    return (
        <article className='video-player-wrapper'>
            <div className="video-player-container">
                <video poster={thumbnail}  className="video-player" controls ></video>
            </div>
        </article>
    )
}

export default VideoPlayer;