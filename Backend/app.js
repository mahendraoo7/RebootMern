const express = require("express");
const cors = require("cors");


const app = express();
const port = 5778;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks",(req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req ,res) => {
    const {task} = req.body;
    if(task) {
        tasks.push(task);
        res.status(201).json({Message : "Tasks added.."});
    } else {
        res.status(400).json({ Error : "Task is require.."})
    }

}); 

app.get("/", (req , res ) => {
    
   res.end(
      "Hello World"
   )
    
})


app.delete("/tasks/:index" ,  (req ,res ) => {
    const index = parseInt(req.params.index);
    if(index >= 0 && index < tasks.length ) 
    {
        tasks.splice(index ,1)
        res.status(201).json({ Message : "Tasks Deleted."});
    } else {
        res.status(400).json({ Message : "Task not found"});
    }
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});


