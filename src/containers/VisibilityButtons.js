import React from 'react';
import { connect } from 'react-redux'; 
import { changeFilter } from '../actions';

const VisibilityButtons = ({ innerText }) => {
  const setFilter = buttonText => {
    switch (buttonText) {
      case 'Show All':
        changeFilter('all');
      case 'Show Active':
        changeFilter('active');
      case 'Show completed':
        changeFilter('completed');
      default:
        changeFilter('all');
    }
  }

  return (
    <section>
      <button onClick={(e) => setFilter(e.target.innerText)}>
        Show All
      </button>
      <button onClick={(e) => setFilter(e.target.innerText)}>
        Show Active
      </button>
      <button onClick={(e) => setFilter(e.target.innerText)}>
        Show Completed
      </button>
    </section>
  );
}

const mapDispatchToProps = dispatch => ({
  changeFilter: text => dispatch( changeFilter(text) )
})

export default connect(null, mapDispatchToProps)(VisibilityButtons);