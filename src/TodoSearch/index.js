import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}){
    
    return(
        <input className="TodoSearch" placeholder="Buscar TODO's"
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value)
            }}
        />
    )
}
export {TodoSearch};