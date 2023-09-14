// src/TodoList.js
import React, { useState } from 'react';
import Task from './Task';
import './TodoList.css';
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState(''); // Add state for due date
  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
      dueDate: newDueDate, // Assign due date
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setNewDueDate(''); // Clear the due date input
  };
  

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText, newDueDate) => { // Update the editTask function
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText, dueDate: newDueDate } : task
    );
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List React App</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
            onComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
