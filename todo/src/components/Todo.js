import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      <div
        className={
          props.todo.completed ? "completed-todo single-todo" : "single-todo"
        }
        onClick={() => props.toggle(props.todo.id)}
      >
        <p className="todo-text">{props.todo.value}</p>
      </div>
      <span
        className="delete-button"
        style={!props.todo.completed ? { display: "none" } : null}
        onClick={e => props.delete(e, props.todo.id)}
      >
        X
      </span>
    </div>
  );
};

export default Todo;
