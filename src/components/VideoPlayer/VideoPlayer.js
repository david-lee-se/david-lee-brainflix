import './VideoPlayer.scss';

function VideoPlayer(props) {

let video=props.activeVideo.video;
let thumbnail=props.activeVideo.image;

    return (
        <article>
            <div className="video-player-container">
                <video poster={thumbnail} className="video-player" controls >
                    <source src={video}/>
                </video>
            </div>
        </article>
    )
}

export default VideoPlayer;