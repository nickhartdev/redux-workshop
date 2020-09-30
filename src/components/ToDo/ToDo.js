import React from 'react';

export const ToDo = ({ id, todo, complete }) => {
  return (
    <li>
      { todo }
      <button>Mark as complete</button>
    </li>
  )
}