import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publishIcon from '../../assets/images/publish.svg'
import './VideoUpload.scss';

function VideoUpload() {
    return (
    <>
        <div className='thumbnail-container'>
        
        <h1 className='video-upload-title'>Upload Video</h1>
        
        
            <h3 className='thumbnail__label'>VIDEO THUMBNAIL</h3>
            <img className="thumbnail__img" src={thumbnail} alt='thumbnail'/>
        </div>
        <form className='publish-form'>
            <label htmlFor="title" className='publish-form__title-label'>TITLE YOUR VIDEO</label>
            <input id='title-input' type="text" name="title" placeholder="Add a title to your video"></input>
            <label htmlFor="description" className='publish-form__description-label'>ADD A VIDEO DESCRIPTION</label>
            <textarea 
                id='description-input' 
                type="text" 
                name="description" 
                placeholder="Add a description to your video">
            </textarea>
            <div className='button-container'>
                <div className='publish-button-container'>
                    <button type="submit" className='publish-button'>
                        <img className="publish-button__icon"src={publishIcon} alt="Button Icon"/>
                        PUBLISH
                    </button>
                </div>
                <div className='cancel-button-container'>
                    <button type="button" className='cancel-button'>
                        CANCEL
                    </button>
                </div>
            </div>
        </form>
    </>
    )
}

export default VideoUpload;