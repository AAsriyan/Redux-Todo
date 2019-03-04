import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      value: "Walk the dog",
      completed: false,
      index: 0
    },
    {
      value: "Walk the cat",
      completed: false,
      index: 1
    },
    {
      value: "Walk the turtle",
      completed: false,
      index: 2
    }
  ]
};

export default (state = initialState, action) => {
  console.log("from reducer");
  switch (action.type) {
    case ADD_TODO:
      return [...state.todos, action.payload];
    case TOGGLE_TODO:
      state.todos[action.payload].completed = !state.todos[
        action.payload.completed
      ];
      return state;
    default:
      return state;
  }
};
