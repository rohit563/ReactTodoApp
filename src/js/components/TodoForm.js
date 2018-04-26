import React from "react";
import PropTypes from 'prop-types';

const TodoForm = ({addTodo}) => {
  let input;
  return (
    <form className="todoForm" onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input ref={node => {
        input = node;
      }} />
      <button>ADD TO LIST</button>
    </form>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func
};

export default TodoForm
