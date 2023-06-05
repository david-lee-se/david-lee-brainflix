import {useRef} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import publishIcon from '../../assets/images/publish.svg';
import './VideoUpload.scss';

function VideoUpload(props) {

    const setVideoList= props.setVideoList;
    const formRef = useRef();

    const handleSubmit = (event) => {
        const formEl = formRef.current;
        const title = formEl.title.value;
        const description = formEl.description.value;
        const image = "http://localhost:8080/public/images/upload.jpg";
        const videoObj = {title, description, image};
        axios.post("http://localhost:8080/videoUpload", videoObj)
            .then((result) => {
                alert("Upload Successful!!")
            })
    }
    return (
    <>
        <form ref={formRef} className='title-container'>
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
                    >
                    </textarea>
                </div>
            </div>
            <div className='button-container'>
                <Link to= {'/'} >
                    <button type="submit" onClick={handleSubmit} className='publish-button'>
                        <img className="publish-button__icon" src={publishIcon} alt="Button Icon"/>
                        PUBLISH
                    </button>
                </Link>
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
