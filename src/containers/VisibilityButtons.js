import React from 'react';
import { connect } from 'react-redux'; 
import { changeFilter } from '../actions';

const VisibilityButtons = ({ changeFilter }) => {
  return (
    <section>
      <button onClick={(e) => changeFilter('all')}>
        Show All
      </button>
      <button onClick={(e) => changeFilter('active')}>
        Show Active
      </button>
      <button onClick={(e) => changeFilter('completed')}>
        Show Completed
      </button>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
  changeFilter: text => dispatch( changeFilter(text) )
})

export default connect(null, mapDispatchToProps)(VisibilityButtons);