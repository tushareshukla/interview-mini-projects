const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
// port number
const PORT = process.env.PORT || 8000;

//middle ware
app.use(cors());

// in memory database
let tasks = [];

// routes

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//handle post request for making task json apis

app.post("/tasks", (req, res) => {
  const { title, body } = req.body;
  const newTask = { id: tasks.length + 1, title, body };
  tasks.push(newTask);
  res.status(200).json(newTask);
});

// handling modification of task by id

app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, body } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], title, body };
    res.status(200).json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});




// delete task by id handlinf delete method 

app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    res.status(200).end();
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
