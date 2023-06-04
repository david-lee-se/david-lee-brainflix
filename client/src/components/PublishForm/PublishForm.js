import './PublishForm.scss';


function PublishForm() {
    return (
        <div className='publish-form__input-container'>
            <label htmlFor="title" className='publish-form__title-label'>TITLE YOUR VIDEO</label>
            <input id='title-input' type="text" name="title" placeholder="Add a title to your video"></input>
            <label htmlFor="description" className='publish-form__description-label'>ADD A VIDEO DESCRIPTION</label>
            <textarea 
                id='description-input' 
                type="text" 
                name="description" 
                placeholder="Add a description to your video">
            </textarea>
        </div>
    )
}

export default PublishForm;










                    