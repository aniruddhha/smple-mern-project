import React, { useEffect, useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  // Fetch all to-do items from the backend
  useEffect(() => {
    fetch('http://ec2-3-142-218-155.us-east-2.compute.amazonaws.com:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.item} - {todo.status ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;