import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {v1} from 'uuid'

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTask] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    let [nameBtn, setNameBtn] = useState('All')

    let filterTask = tasks

    if (nameBtn === 'Completed'){
        filterTask = tasks.filter(el => el.isDone === true)
    }
    if(nameBtn === 'Active'){
        filterTask = tasks.filter(el => el.isDone === false)
    }

    const changeFilter = (value: FilterValuesType) => {
        setNameBtn(value)
    }

    const removeTasks = (id: string) => {
        tasks = tasks.filter(el => el.id !== id)
        setTask(tasks)
    }

    const onClickHandler = (nameBtn: string) => {
        setNameBtn(nameBtn)
    }

    const addTask = (newTaskTitle: string) => {
        let newTask = {
            id: v1(),
            title: newTaskTitle,
            isDone: false
        }
        let newTasks = [newTask, ...tasks]
        setTask(newTasks)
        console.log(newTask)
    }



    return (
        <div className="App">
            <TodoList filterTask={filterTask}
                      title={'My tasks'}
                      callBack={onClickHandler}
                      changeFilter={changeFilter}
                      removeTasks={removeTasks}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
