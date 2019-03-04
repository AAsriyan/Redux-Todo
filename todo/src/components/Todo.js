import React from "react";

const Todo = props => {
  return (
    <div>
      {props.todo.value}
      {props.todo.completed}
    </div>
  );
};

export default Todo;
