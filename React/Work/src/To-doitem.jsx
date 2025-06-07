import React from "react";

function TODOITEM(props) {
    
    return <>
    
        <li>
            {props.task}
            <button onClick={props.onDelete} style={{marginRight : '10px'}}> Delete</button>
        </li>
     
    </>
}

export default TODOITEM