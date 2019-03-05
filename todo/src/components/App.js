import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTodo, toggleTodo, deleteTodo } from "../actions";
import uuidv4 from "uuidv4";

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
      <div>
        <h1>App Connected</h1>
        <form onSubmit={this.handleAddTodo}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChanges}
            required
          />
          <button type="submit">Submit</button>
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
  console.log(state);
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
