import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    addTaskHandler:()=>void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

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
        />
    );
};