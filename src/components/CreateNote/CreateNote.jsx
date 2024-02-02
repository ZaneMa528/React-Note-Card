import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const CreateNote = ({ handleText, addNote, inputText }) => {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;

    return (
        <div className='note'>
            <textarea
                cols={10}
                rows={5}
                placeholder='Type....'
                value={inputText}
                maxLength={charLimit}
                onChange={handleText}
            ></textarea>
            <div className="note__footer">
                <span className='label'>{charLeft} left</span>
                <button
                    className='note__save'
                    onClick={addNote}
                >Save</button>
            </div>
            <LinearProgress
                className='char__progess'
                variant='determinate'
                value={charLeft}
            />
        </div>
    )
}

export default CreateNote