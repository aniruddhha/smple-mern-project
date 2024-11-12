import { useState } from 'react'
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h1>My To-Do App</h1>
      <ToDoForm onAddTodo={addTodo} />
      <ToDoList todos={todos} />
    </div>
  )
}

export default App
