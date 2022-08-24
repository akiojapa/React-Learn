import React from 'react';
import {CgClose, CgInfo} from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

import './Task.css'



const Task  = ({ task, handleTaskClick, handleTaskDelete }) => {

    const history = useNavigate();

    const handleDetailsClick = () => {
        history(task.title)
    }

    return( 
    <div 
    className='task-container' 
    style={task.completed ? { border: '2px solid #ff3434', borderLeft: '12px solid #ff3434'} : {}}>
        <div className='task-title' onClick={() => handleTaskClick(task.id)} >
        {task.title} 
        </div>
        <div className="buttons-container">
            <button className='see-task-button' onClick={handleDetailsClick}><CgInfo/></button>
            <button onClick={() => handleTaskDelete(task.id)} className='remove-task-button'><CgClose/></button>
        </div>
    </div>
    );
};
 
export default Task;