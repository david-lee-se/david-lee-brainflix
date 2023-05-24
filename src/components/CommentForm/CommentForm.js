import './CommentForm.scss';
import commentIcon from '../../assets/icons/add_comment.svg';


function CommentForm(props) {
    return(
        <form className="comment-form">
            <img className="comment-form__avatar" src={props.avatar} alt=""/>
            <div className='comment-form__input-container'>   
                <div className="comment-form__container">
                <label className="comment-form__label" htmlFor="comment">JOIN THE CONVERSATION</label>
                <input id="comment-input" type="text" name="comment" placeholder="Add a new comment"></input>
                </div>
                <div className='comment-form__button-container'>
                <button type="submit" className='comment-form__button'>
                    <img className="comment-form__button-icon"src={commentIcon} alt=""/>
                    COMMENT</button>
                </div>
            </div> 
        </form>
    )
}

export default CommentForm;