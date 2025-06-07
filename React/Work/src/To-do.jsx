import React, { useState } from "react";
import TODOITEM from "./to-doitem";

function Todo () {

    const [task , setTask] = useState("");
    const [tasks , setTasks] = useState([]);

    const addTask = () => {
        
          if(task.trim("") !== "")
          {
             setTasks([...tasks , task]);
             setTask("");
          }
    }

    const Enter = (e) => {
 
         if(e.key === 'Enter')
         {
            addTask();
         }
        
    }


    return <>
    
         <h1>todo App</h1>
         <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter the value" onKeyDown={Enter}/>
         <button onClick={addTask} onKeyDown={Enter}> Add </button>
        

         <ul>
            {
                tasks.map((t,index) => (
                    <TODOITEM key={index} task={t} />
                ))
            }
         </ul>
    </>

}

export default Todo
