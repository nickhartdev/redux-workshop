import React from 'react';
import { connect } from 'react-redux';
import { markToDoAsComplete } from '../../actions'

const ToDo = ({ id, todo, completed, markToDoAsComplete }) => {
  return (
    <li 
      onClick={() => markToDoAsComplete(id)}
      className={completed ? 'completed' : 'not-completed'}
    >
      {todo}
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  markToDoAsComplete: id => dispatch( markToDoAsComplete(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);

