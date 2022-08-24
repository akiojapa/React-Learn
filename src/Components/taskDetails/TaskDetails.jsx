import React from 'react';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './TaskDetails.css'

import Button from '../Button/Button.jsx'

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1)
    }
    

    return (    
        <>

        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur sed pariatur quo, officia quaerat consectetur! Nemo, molestiae rem eveniet quisquam blanditiis similique soluta quasi culpa aliquam exercitationem. Ducimus, iure.
            </p>
        </div>
        <div className="back-button-cointainer">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        </>
     );
};
 
export default TaskDetails;