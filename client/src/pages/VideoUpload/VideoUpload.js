import './VideoUpload.scss';
import publishIcon from '../../assets/images/publish.svg';
import {useId} from 'react';
import axios from 'axios';

function VideoUpload() {

    const videoId= useId();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formEl = event.target;
        const title = formEl.title.value;
        const description = formEl.description.value;
        const image = "http://localhost:8080/public/images/upload.jpg";
        const id = formEl.description.id;
        const videoObj = {title, description, image, id};
        axios.post("http://localhost:8080/videoUpload", videoObj)
            .then((result) => {
                event.target.reset();
            })
    }
    return (
    <>
        <form onSubmit={handleSubmit} className='title-container'>
            <h1 className='video-upload-title'>Upload Video</h1>
            <div className='upload-details'>
                <div className='thumbnail-container'>
                    <h3 className='thumbnail__label'>VIDEO THUMBNAIL</h3>
                    <img className="thumbnail__img" src="http://localhost:8080/public/images/upload.jpg" alt='thumbnail'/>
                </div>
                <div className='publish-form__input-container'>
                    <label htmlFor="title" className='publish-form__title-label'>TITLE YOUR VIDEO</label>
                    <input id='title-input' type="text" name="title" placeholder="Add a title to your video"></input>
                    <label htmlFor="description" className='publish-form__description-label'>ADD A VIDEO DESCRIPTION</label>
                    <textarea 
                        className='description-input' 
                        type="text" 
                        name="description" 
                        placeholder="Add a description to your video"
                        id={videoId}>
                    </textarea>
                </div>
            </div>
            <div className='button-container'>
            {/* <Link to="/" className='publish-button-container'> */}
                <button type="submit" className='publish-button'>
                    <img className="publish-button__icon" src={publishIcon} alt="Button Icon"/>
                    PUBLISH
                </button>
            {/* </Link> */}
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
