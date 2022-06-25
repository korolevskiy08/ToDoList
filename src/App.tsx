import React, {useState} from 'react';
import './App.css';
import {TasksType, TodoList} from "./components/TodoList/TodoList";
import {v1} from 'uuid'

export type FilterValuesType = "all" | "active" | "completed";

type TodoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskStateType = { // типизация тасок
    [todoListID: string]: Array<TasksType>
}

function App() {

    const todoListID_1 = v1()
    const todoListID_2 = v1()

    const [todoList, setTodolist] = useState<Array<TodoListType>>([
        {id: todoListID_1, title: 'What to learn', filter: 'all'},
        {id: todoListID_2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, setTask] = useState<TaskStateType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false,}
        ],
        [todoListID_2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Cheese", isDone: true},
            {id: v1(), title: "Bread", isDone: false,}
        ]
    })



    const removeTasks = (todoListID:string, id: string) => {
        setTask({...tasks, [todoListID]: tasks[todoListID].filter(el => el.id !== id)})
    }



    const addTask = (todoListID: string, newTaskTitle: string) => {
        let newTask = {
            id: v1(),
            title: newTaskTitle,
            isDone: false
        }
        setTask({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})

    }

    const changeCheckBox = (todoListID: string, taskId: string, value: boolean) => {
        setTask({...tasks, [todoListID]: tasks[todoListID].map(el => el.id === taskId ? {...el, isDone: value}: el)})
    }

    const changeFilter = (todoListID: string, value: FilterValuesType) => {
        setTodolist(todoList.map(el => el.id === todoListID ? {...el, filter: value} : el))
    }

    return (
        <div className="App">

            {todoList.map(el => {

                let filterTask = tasks[el.id]


                if (el.filter === "completed") {
                    filterTask = tasks[el.id].filter(el => el.isDone === true)
                }
                if (el.filter === 'active') {
                    filterTask = tasks[el.id].filter(el => el.isDone === false)
                }

                return (
                    <TodoList title={el.title}
                              changeCheckBox={changeCheckBox}
                              filterTask={filterTask}
                              changeFilter={changeFilter}
                              removeTasks={removeTasks}
                              addTask={addTask}
                              todoListID={el.id}
                    />
                )
            })}


        </div>
    );
}

export default App;
