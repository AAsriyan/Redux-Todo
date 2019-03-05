import React from "react";

const Todo = props => {
  console.log(props.todo.id);
  return (
    <div>
      <div
        style={props.todo.completed ? { textDecoration: "line-through" } : null}
        onClick={() => props.toggle(props.todo.id)}
      >
        {props.todo.value}
      </div>
      <span onClick={e => props.delete(e, props.todo.id)}>X</span>
    </div>
  );
};

export default Todo;
