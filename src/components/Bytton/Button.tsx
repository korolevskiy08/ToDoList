import React from "react";

type ButtonType = {
    title: string,
    callBack: ()=>void,

}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return(
        <div>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    )
}