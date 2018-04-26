import React from "react";
import PropTypes from 'prop-types';

const TodoList = ({list, removeTodo, handleCheckBoxChange}) => {
  return(
    <div className="flex-container">
      <div className="row">

          {list.map(todo => (
            <div className="flex-item" key={todo.id}>

            <div className="todoItem">
              <div
                onClick={(e) => {e.preventDefault(); handleCheckBoxChange(todo.id);}}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
              >
              {todo.text}

              </div>
              <button className="deleteButton" onClick={(e) => { e.preventDefault(); removeTodo(todo.id);}}>x</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

TodoList.propTypes = {
  list: PropTypes.array,
  removeTodo: PropTypes.func,
  handleCheckBoxChange: PropTypes.func
};

export default TodoList
