import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Task from './Task';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [route, setRoute] = useState('/TaskList');
  const [selectedTaskId, setSelectedTaskId] = useState(null);


  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const selectTask = (taskId) => {
    setSelectedTaskId(taskId);
    setRoute('/task');
  };


  const getTaskById = (id) => tasks.find(task => task.id === id);


  

  return (
    <div>
      <button onClick={() => setRoute('/TaskList')}>Task List</button>
      <button onClick={() => setRoute('/AddTask')}>Add Task</button>
      
      {route === '/TaskList' && <TaskList tasks={tasks} onTaskSelect={selectTask} />}
      {route === '/AddTask' && <AddTask onAddTask={addTask} />}
      {route === '/task' && selectedTaskId && <Task task={getTaskById(selectedTaskId)} />}
    </div>
  );

}

export default App;
