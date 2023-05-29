import './PublishButton.scss';
import { Link } from "react-router-dom";
import publishIcon from '../../assets/images/publish.svg'

function PublishButton() {
    return (
        <div className='button-container'>
            <Link to="/" className='publish-button-container'>
                <button type="submit" className='publish-button'>
                    <img className="publish-button__icon"src={publishIcon} alt="Button Icon"/>
                    PUBLISH
                </button>
            </Link>
            <div className='cancel-button-container'>
                <button type="button" className='cancel-button'>
                    CANCEL
                </button>
            </div>
        </div>
    )
}

export default PublishButton;