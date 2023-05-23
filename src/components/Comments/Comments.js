import './Comments.scss';


function Comments(props) {



    return (
        <div className="comments">
            <hr/>
            <ul className="comments-list">
                
                {props.activeVideo.comments.map((comment) => {
                    
                    const date = new Date(comment.timestamp).toDateString();
                    return (
                        <div key={comment.id}>
                            <li className='comment' >
                                <div className='comment__avatar' alt='avatar'></div>
                                <div className='comment__text-container'>
                                <h4 className="comment__name">{comment.name}</h4>
                                <p className="comment__date">{date}</p>
                                <p className="comment__content">{comment.comment}</p>
                                </div>
                            </li>
                            <hr className='divider'/>
                        </div>
                            )
                    })
                  }
                
            </ul>
        </div>
    )
}

export default Comments;