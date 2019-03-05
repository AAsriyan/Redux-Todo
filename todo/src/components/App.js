import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTodo, toggleTodo, deleteTodo } from "../actions";
import uuidv4 from "uuidv4";

import "./App.css";

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
      completed: false,
      id: uuidv4()
    };

    this.props.addTodo(newTodo);

    this.setState({
      text: ""
    });
  };

  handleToggleTodo = id => {
    this.props.toggleTodo(id);
  };

  handleDeleteTodo = (e, id) => {
    e.preventDefault();

    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <form className="todo-form" onSubmit={this.handleAddTodo}>
          <input
            className="add-input"
            type="text"
            name="text"
            placeholder="Add Todo..."
            value={this.state.text}
            onChange={this.handleChanges}
            required
          />
          <button className="hidden" type="submit">
            Submit
          </button>
        </form>
        <TodoList
          todos={this.props.todos}
          toggle={this.handleToggleTodo}
          delete={this.handleDeleteTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {
    addTodo,
    toggleTodo,
    deleteTodo
  }
)(App);
