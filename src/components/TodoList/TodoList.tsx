import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import c from './TodoList.module.css'
import {Button} from "../Bytton/Button";
import {FilterValuesType} from "../../App";
import {Input} from "../Input/Input";

type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}

type TodoListType = {
    filterTask: Array<TasksType>
    title: string
    callBack: (nameBtn: string) => void
    changeFilter: (value: FilterValuesType) => void
    removeTasks: (id: string) => void
    addTask: (newTaskTitle: string) => void
}

export const TodoList = (props: TodoListType) => {

    let [newTaskTitle, setNewTaskTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }

    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setNewTaskTitle(event.currentTarget.value)
    //
    // }
    //
    // const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.ctrlKey && event.code === 'Enter') {
    //         addTaskHandler()
    //     }
    //     console.log(event)
    // }

    const korolChangeHandler = (value: FilterValuesType) => {
        console.log(value)
        props.changeFilter(value)
    }

    const onClickHandler = (id: string) => props.removeTasks(id)

    return (
        <div>

            <ul className={c.content}>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div className={c.addTasks}>
                    <div>
                        <Input setTitle={setNewTaskTitle}
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

                {props.filterTask.map(el => {

                    return (
                        <li key={el.id} className={c.myTasks}>
                            <div>
                                <Button title={'X'} callBack={()=>onClickHandler(el.id)}/>
                            </div>
                            <div className={`${el.isDone === true ? c.complited : c.active}`}>
                                {el.title}
                            </div>
                            <div>
                                <input type={"checkbox"} checked={el.isDone}/>
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

