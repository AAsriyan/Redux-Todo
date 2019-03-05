import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggle={props.toggle}
          delete={props.delete}
        />
      ))}
    </div>
  );
};

export default TodoList;
