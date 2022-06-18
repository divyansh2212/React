import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete.js';

const ToDoList = (props) => {

    const [line, setLine] = useState(false)

    const cut = () => {
        setLine(!line);

    }

    return (
        <>
            <div className='todo_style'>
                <span className='deleteIcon' onClick={cut}> <DeleteIcon />
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }} >{props.text}</li>
            </div>
        </>
    )
}



export default ToDoList;