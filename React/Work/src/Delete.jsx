import React from "react";
import { useState } from "react";
import TODOITEM from "./to-doitem";

function ToDOD () {
    
    const [task , setTask] = useState("");
    const [tasks , setTasks] = useState([]);

    const addtask = (e) => {

      if(task.trim() !== "")
      {
         setTasks([...tasks , task]);
         setTask("");
    }

    } 
    const DeleteTask = (itd) => {
        const updatedTask = tasks.filter((_ , index) => index !== itd);
        setTasks(updatedTask);
    }

    const Enter = (e) => {
        if(e.key === 'Enter')
        {
            addtask();
        }
    }

    return <>
    
        <input style={{display: "flex", margin : "20px 10px"}} type="text" value={task}  placeholder="Enter a Task" onKeyDown={Enter} onChange={(e) => setTask(e.target.value)} />
        
        <ul>
            {
                tasks.map((t,i) => (
                    <TODOITEM key={i} task={t} onDelete={() => DeleteTask(i)}/>
                ))
            }
        </ul>

    </>

}

export default ToDOD