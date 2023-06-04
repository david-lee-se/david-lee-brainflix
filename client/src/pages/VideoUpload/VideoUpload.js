import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import './VideoUpload.scss';
import PublishForm from '../../components/PublishForm/PublishForm';
import PublishButton from '../../components/PublishButton/PublishButton';

function VideoUpload() {
    return (
    <>
        <section className='title-container'>
            <h1 className='video-upload-title'>Upload Video</h1>
            <div className='upload-details'>
                <div className='thumbnail-container'>
                    <h3 className='thumbnail__label'>VIDEO THUMBNAIL</h3>
                    <img className="thumbnail__img" src={thumbnail} alt='thumbnail'/>
                </div>
                <PublishForm/>
            </div>
            <PublishButton/>
        </section>
    </>
    )
}

export default VideoUpload;