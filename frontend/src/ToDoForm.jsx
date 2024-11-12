import React, { useState } from 'react';

const ToDoForm = ({ onAddTodo }) => {
  const [item, setItem] = useState('');
  const [status, setStatus] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new to-do item and send it to the backend
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item, status }),
    })
      .then(response => response.json())
      .then(newTodo => {
        onAddTodo(newTodo); // Update parent component with the new to-do item
        setItem(''); // Clear the form input
        setStatus(false);
      })
      .catch(error => console.error('Error creating todo:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New To-Do</h2>
      <label>
        Item:
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
      </label>
      <label>
        Status:
        <input
          type="checkbox"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        Completed
      </label>
      <button type="submit">Add To-Do</button>
    </form>
  );
};

export default ToDoForm;