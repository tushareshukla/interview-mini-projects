import React from "react";
import { useEffect, useState } from "react";
export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []); // load todos from local storage when compoent mounts

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // save todos to local storage when todos change

  const handleTodo = () => {
    if (newTodo.trim() !== " ") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: newTodo,
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };
  const handleTodoToggle = (id) => {
    setTodos(
      todos.map((todos) => {
        if (todos.id === id) {
          return {
            ...todos,
            completed: !todos.completed,
          };
        }
        return todos;
      })
    );
  };
  return (
    <>
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => { 
            return(
                <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    handleTodoToggle(todo.id);
                  }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
    
                <button
                 onClick={ ()=> handleDelete(todo.id)}> nikal </button>
              </li>
            )
         
        })}
      </ul>
    </>
  );
}
