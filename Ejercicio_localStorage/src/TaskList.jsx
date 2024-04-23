import React from 'react';
import PropTypes from 'prop-types';

function TaskList({ tasks, onTaskSelect }) {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => onTaskSelect(task.id)}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  onTaskSelect: PropTypes.func.isRequired,
};

export default TaskList;
