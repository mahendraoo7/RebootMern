import React, { useState } from "react";
import ToDoItem from "./to-doitem";

function TODO () {

    const [task , setTask] = useState("");
    const [tasks , setTasks] = useState([]);

    
    const addTask = () => {

        if(task.trim() !== "")
            {
                setTasks([...tasks , task]);
                setTask(""); 
            }

        };

return <>
      
         <h1>TODO list</h1>
         <input type="text" value={task} onChange={(e) => setTask(e.target.value)}  placeholder="Enter a Task"/>
         <button onClick={addTask}>Add</button>

         <ul>
            {tasks.map((t,index) => (
                
             <ToDoItem key={index} task={t} />  
         ))}

         </ul>
          
    </>

}


export default TODO