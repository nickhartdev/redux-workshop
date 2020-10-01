import React from 'react';
import { connect } from 'react-redux';
import { markToDoAsComplete } from '../../actions'

export const ToDo = ({ id, todo, completed }) => {
  const invokeMarkToDoAsComplete = () => {
    markToDoAsComplete(id);
  }

  return (
    <li>
      { todo }
      <button onClick={ invokeMarkToDoAsComplete }>Mark as complete</button>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  markToDoAsComplete: id => dispatch( markToDoAsComplete(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);

