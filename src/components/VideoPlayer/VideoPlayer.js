import './VideoPlayer.scss';

function VideoPlayer(props) {

    return (
        <article>
            <div className="video-player-container">
                <video poster={props.activeVideo.image} className="video-player" controls ></video>
            </div>
        </article>
    )
}

export default VideoPlayer;