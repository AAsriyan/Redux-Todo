import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";
import uuidv4 from "uuidv4";

const initialState = {
  todos: [
    {
      value: "Walk the dog",
      completed: false,
      id: uuidv4()
    },
    {
      value: "Walk the cat",
      completed: false,
      id: uuidv4()
    },
    {
      value: "Walk the turtle",
      completed: false,
      id: uuidv4()
    }
  ]
};

export default (state = initialState, action) => {
  console.log("from reducer");
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos
          .filter(todo => todo.id !== action.payload)
          .map(todo => {
            return {
              ...todo
            };
          })
      };
    default:
      return state;
  }
};
