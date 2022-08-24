import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import axios from 'axios';


import "./App.css"
import Header from '../Components/Header/header';
import Tasks from '../Components/Tasks';
import AddTask from '../Components/Input/AddTask'
import TaskDetails from '../Components/taskDetails/TaskDetails';


const App = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        const fetchTasks = async () => {
        const data = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
        setTasks(data.data)
    };
        fetchTasks();
    }, [])


    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map(task=>{
            if(task.id === taskId) return {...task, completed: !task.completed}
            return task; 
        })

        setTasks(newTasks)
    }

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
            },
        ];

        setTasks(newTasks);


    };


    const handleTaskDelete = (taskId) => {
        const newtasks = tasks.filter((task) => task.id !== taskId)

        setTasks(newtasks)
    }

    return (
        <Router>
            <Header />
            <div className='container'>
            <Routes>
                <Route path='/' 
                element = {
                        <>
                        <AddTask handleTaskAddition={handleTaskAddition}/>
                        <Tasks 
                        tasks={tasks} 
                        handleTaskClick={handleTaskClick}
                        handleTaskDelete = {handleTaskDelete}
                        />
                    </>
                    }
                />
                <Route path=':taskTitle' element={<TaskDetails/>}/>

            </Routes>
            </div>
        </Router>

    );

};

export default App;