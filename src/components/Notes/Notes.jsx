import React from 'react'
import '../../style/Note.css';
import { useState, useEffect } from 'react';
import Note from '../Note';
import CreateNote from '../CreateNote';
import { v4 as uuid } from "uuid";


function Notes() {
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(true);

    // get text and store in inpuText
    const handleText = (e) => {
        setInputText(e.target.value);
    }

    //add new note
    const addNote = () => {
        //If new state depends on the previous state, use the function form of setState
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText
            }
        ]);
        //clear textarea
        setInputText('');
    };

    //delete note
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    }

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('Notes'))
        if (Array.isArray(storedData) && storedData.length > 0) {
            setNotes(storedData)
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('Notes', JSON.stringify(notes))
        }
    }, [notes, loading]);

    return (
        <div className='notes'>
            {notes.length > 0 && notes.map((note) => (
                <Note
                    key={note.id}
                    text={note.text}
                    id={note.id}
                    deleteNote={deleteNote}
                />
            ))}
            <CreateNote
                handleText={handleText}
                addNote={addNote}
                inputText={inputText}
            />
        </div>
    )
}

export default Notes