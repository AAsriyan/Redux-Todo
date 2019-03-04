import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTodo, toggleTodo } from "../actions";

export class App extends Component {
  state = {
    text: ""
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddTodo = e => {
    e.preventDefault();
    const newTodo = {
      value: this.state.text,
      completed: false
    };
    this.props.addTodo(newTodo);

    this.setState({
      text: ""
    });
  };

  handleSubmit = e => {};

  render() {
    return (
      <div>
        <h1>App Connected</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChanges}
          />
          <button type="submit" onClick={this.handleAddTodo}>
            Submit
          </button>
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {
    addTodo,
    toggleTodo
  }
)(App);
