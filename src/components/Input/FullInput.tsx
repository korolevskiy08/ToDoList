import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

// type FullInputPropsType = {
//     callback: (newTaskTitle: string) => void
// }
//
// export const FullInput = (props: FullInputPropsType) => {
//
//     let [newTaskTitle, setNewTaskTitle] = useState('')
//
//     const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         setNewTaskTitle(event.currentTarget.value)
//
//     }
//
//     const addTaskHandler = () => {
//         props.callback(newTaskTitle)
//         setNewTaskTitle('')
//     }
//
//     const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
//         if (event.ctrlKey && event.code === 'Enter') {
//             addTaskHandler()
//         }
//         console.log(event)
//     }
//
//     return (
//         <div>
//             <input onChange={onChangeHandler}
//                    value={newTaskTitle}
//                    onKeyPress={onKeyPressHandler}
//             />
//         </div>
//     );
// };

