import React from 'react';
import './CreateTodoButton.css'
//import {TodoContext} from '../TodoContext';

function CreateTodoButton({setOpenModal}){
    // const {
    //     openModal,
    //     setOpenModal,
    // }=React.useContext(TodoContext)
    return(
        <button className='CreateTodoButton'
            // onClick={
            //     ()=>{
            //         if (!openModal){
            //             setOpenModal(true);
            //         } else{
            //             setOpenModal(false);
            //         }
            //     } 
            // }
            onClick={()=>{setOpenModal(state=>!state)}}
        >+</button>
    )
}
export {CreateTodoButton};