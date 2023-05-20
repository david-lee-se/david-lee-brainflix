import './CommentForm.scss';
import commentIcon from '../../assets/icons/add_comment.svg';


function CommentForm(props) {
    return(
        <form className="comment-form">
            <img className="comment-form__avatar" src={props.avatar}/>
            <div className="comment-form__container">
            <label className="comment-form__label" htmlFor="comment">JOIN THE CONVERSATION</label>
            <textarea id="comment-input" type="text" name="comment" placeholder="Add a new comment"></textarea>
            <button type="submit" className='comment-form__button'>
                <img className="comment-form__button-icon"src={commentIcon}/>
                COMMENT</button>
            </div>
        </form>
    )
}

export default CommentForm;