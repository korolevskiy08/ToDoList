import React from 'react';
import c from './TodoList.module.css'
import {Button} from "../Bytton/Button";
import {Input} from "../Input/Input";

type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type TodoListType = {
    filterTask: Array<TasksType>
    title: string
    callBack: (nameBtn: string) => void
    removeTasks: (id: number) => void
}

export const TodoList = (props: TodoListType) => {
    return (
        <div>
            <ul className={c.content}>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div className={c.addTasks}>
                    <div>
                        <Input title={''} setTitle={() => {}}/>
                    </div>
                    <div>
                        <Button name={'+'} callBack={() => {}}/>
                    </div>
                </div>

                {props.filterTask.map(el => {
                    return (
                        <li key={el.id} className={c.myTasks}>
                            <div>
                                <button onClick={() => {
                                    props.removeTasks(el.id)
                                }}>X
                                </button>
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
                    <button onClick={() => props.callBack('All')}>All</button>
                    <button onClick={() => props.callBack('Completed')}>Completed</button>
                    <button onClick={() => props.callBack('Active')}>Active</button>
                </div>


            </ul>

        </div>
    );
};

