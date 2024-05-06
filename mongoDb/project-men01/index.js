//
const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./Todo");
// create express app

const app = express();
const PORT = process.env.PORT || 6000;

// connect to mongodb

mongoose
  .connect("mongodb://localhost:27017/practice-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
// middleware

app.use(express.json());

// routes

// Get all todo items
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new todo item
app.post("/todos", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    dueDate: req.body.dueDate,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get a single todo
app.get("/todo/:id", gettodo, (req, res) => {
  res.json(res.todo);
});

//update a todo items by id
app.patch("/todo/:id", gettodo, async(req, res) => {
  if (req.body.title != null) {
    res.todo.title = req.body.title;
  }
  if (req.body.description != null) {
    res.todo.description = req.body.description;
  }
  if (req.body.status != null) {
    res.todo.status = req.body.status;
  }
  if (req.body.dueDate != null) {
    res.todo.dueDate = req.body.dueDate;
  }
  try {
    const updatedTodo = await res.todo.save();
    res.json(updatedTodo)
    
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
  
});



// delete todo
// Delete a todo item
app.delete('/todos/:id', getTodo, async (req, res) => {
    try {
      await res.todo.remove();
      res.json({ message: 'Todo item deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


// middleware function to get todo
async function gettodo(req, res, next) {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(401).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.todo = todo;
  next();
}
//start server
app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT}`);
});
