import React from 'react';
import './TodosEmpty.css';

function TodosEmpty(){
    
    return(
        <div className='empty-container'>
            <p className="empty-text">¡Crea tu primer TODO!</p>
        </div>
    )
}
export {TodosEmpty};