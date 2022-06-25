import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import c from './TodoList.module.css'
import {Button} from "../Bytton/Button";
import {FilterValuesType} from "../../App";
import {Input} from "../Input/Input";

export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}
type TodoListType = {
    filterTask: Array<TasksType>
    title: string
    changeFilter: (todoListID: string, value: FilterValuesType) => void
    removeTasks: (todoListID: string, id: string) => void
    addTask: (todoListID: string, newTaskTitle: string) => void
    changeCheckBox: (todoListID: string, taskId: string, value: boolean) => void
    todoListID: string
}

export const TodoList = (props: TodoListType) => {

    let [newTaskTitle, setNewTaskTitle] = useState('')
    let [error, setError] = useState<string | null>(null)


    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(props.todoListID,newTaskTitle)
            setNewTaskTitle('')
            setError(null)
        } else {
            setError('Error')
        }
    }

    const korolChangeHandler = (value: FilterValuesType) => props.changeFilter(props.todoListID, value)

    const onClickHandler = (id: string) => props.removeTasks(props.todoListID, id)
    const onChangeCheckBoxHandler = (taskId: string, value: boolean) => {
        props.changeCheckBox(props.todoListID, taskId, value)
    }

    return (
        <div>

            <ul className={c.content}>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div className={c.addTasks}>
                    <div>
                        <Input setError={setError}
                            error={error}
                               setTitle={setNewTaskTitle}
                               title={newTaskTitle}
                               addTaskHandler={addTaskHandler}
                        />

                        {/*<input onChange={onChangeHandler}*/}
                        {/*       value={newTaskTitle}*/}
                        {/*       onKeyPress={onKeyPressHandler}*/}
                        {/*/>*/}

                        {/*<FullInput callback={props.addTask}/>*/}
                    </div>
                    <div>
                        <Button title={'+'}
                                callBack={addTaskHandler}

                        />
                    </div>

                </div>
                <div className={c.errorMessage}>{error}</div>
                {props.filterTask.map(el => {

                    return (
                        <li key={el.id} className={c.myTasks}>
                            <div>
                                <Button title={'X'} callBack={() => onClickHandler(el.id)}/>
                            </div>
                            <div className={`${el.isDone === true ? c.complited : c.active}`}>
                                {el.title}
                            </div>
                            <div>
                                <input
                                    onChange={(event) => onChangeCheckBoxHandler(el.id, event.currentTarget.checked)}
                                    type={"checkbox"} checked={el.isDone}/>
                            </div>
                        </li>
                    )
                })}

                <div className={c.sortBtn}>
                    <Button title={'All'} callBack={() => korolChangeHandler('all')}/>
                    <Button title={'Active'} callBack={() => korolChangeHandler('active')}/>
                    <Button title={'Completed'} callBack={() => korolChangeHandler('completed')}/>
                </div>
            </ul>
        </div>
    );
};

