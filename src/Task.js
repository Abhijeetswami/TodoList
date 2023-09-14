import React, { useState } from 'react';
const Task = ({ task, onDelete, onEdit, onComplete }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const handleEdit = () => {
    onEdit(task.id, editedTask, dueDate); // Pass dueDate when editing
    setEditing(false);
  };
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          <span>{task.text}</span>
        )}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onComplete(task.id)}>
          {task.completed ? 'Uncomplete' : 'Complete'}
        </button>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};
export default Task;
