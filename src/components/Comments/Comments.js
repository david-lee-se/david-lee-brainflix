import './Comments.scss';



function Comments(props) {

let comments = props.comments;


    return (
        <div className="comments">
            <hr className='divider'/>
            <ul className="comments-list">
                
                {(!comments)? "" : comments.map((comment) => {
                    const date = new Date(comment.timestamp).toLocaleDateString();
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