import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);

    const messageCongratulations=`¡Felicitaciones! no tienes TODO's pendientes 🎉✨`
    const messageCompleted = `Has completado ${completedTodos}  de ${totalTodos} TODO's `
    const todoMessage = (completedTodos===totalTodos) ? messageCongratulations:messageCompleted;
    return(
        <h1 className='TodoCounter'>
            <span>{todoMessage}</span>
        </h1>
    )
}
export {TodoCounter};