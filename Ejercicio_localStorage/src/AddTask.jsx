import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!title) return; 

    
    const newTask = { id: Date.now(), title, description };

    
    onAddTask(newTask);

    
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...storedTasks, newTask]));

    
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired
};

export default AddTask;
