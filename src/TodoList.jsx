import React from 'react';
import './App.css'

function TodoList(props) {

    
    return(
        <>
        <div>
        <button onClick={()=>{
            props.onSelect(props.id)
        }}
          style={{color:'black', fontSize:'14px' }}>Del</button>
        <li>{props.text}</li>
        </div>
        </>
         )}

export default TodoList