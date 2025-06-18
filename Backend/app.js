const express = require("express");
const cors = require("cors");

const app = express();
const port = 5778;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks",(req, res) => {
    res.json();
});



