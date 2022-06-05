import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";


function App() {

    let [tasks, setTask] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    let [nameBtn, setNameBtn] = useState('All')

    let filterTask = tasks

    if (nameBtn === 'Completed'){
        filterTask = tasks.filter(el => el.isDone === true)
    }
    if(nameBtn === 'Active'){
        filterTask = tasks.filter(el => el.isDone === false)
    }

    const removeTasks = (id: number) => {
        tasks = tasks.filter(el => el.id !== id)
        setTask(tasks)
    }

    const onClickHandler = (nameBtn: string) => {
        setNameBtn(nameBtn)
    }

    return (
        <div className="App">
            <TodoList filterTask={filterTask}
                      title={'My tasks'}
                      callBack={onClickHandler}
                      removeTasks={removeTasks}
            />
        </div>
    );
}

export default App;
