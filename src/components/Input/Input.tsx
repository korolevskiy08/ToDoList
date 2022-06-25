import React, {ChangeEvent, KeyboardEvent} from 'react';
import classes from './Input.module.css'

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    addTaskHandler:()=>void
    error: any
    setError: (error: string | null)=>void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
        props.setError(null)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.ctrlKey && event.code === 'Enter') {
            props.addTaskHandler()
        }
    }

    return (
        <input onChange={onChangeHandler}
               value={props.title}
               onKeyPress={onKeyPressHandler}
               className={props.error ? classes.error : ''}
        />
    );
};