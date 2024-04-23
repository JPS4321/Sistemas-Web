import React from 'react';
import PropTypes from 'prop-types';

function Task({ task }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired
};

export default Task;
