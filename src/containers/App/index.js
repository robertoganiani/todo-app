import React, { Component } from 'react';
import { connect } from 'react-redux';
import uid from 'uid';

import './app.css';
import messages from './messages';
import { addTodo, removeTodo } from './actions';
import Input from '../../components/Input';
import ListItem from '../../components/ListItem';

class App extends Component {
  state = {
    todoText: ''
  };

  onInputChange = todoText => {
    this.setState({ todoText });
  };

  handleOnAddClick = () => {
    const { onAddTodo } = this.props;
    const { todoText } = this.state;
    const todoId = uid();

    onAddTodo({ todoId, todoText });
    this.setState({ todoText: '' });
  };

  handleOnRemoveClick = todoId => {
    this.props.onRemoveTodo(todoId);
  };

  renderTodosList = () => {
    const { todos } = this.props;
    return todos.map(todo => (
      <ListItem
        key={todo.todoId}
        todo={todo}
        handleOnRemoveClick={this.handleOnRemoveClick}
      />
    ));
  };

  render() {
    const { todos } = this.props;
    const { todoText } = this.state;
    const { title } = messages;

    return (
      <div className="app">
        <h1>{title}</h1>
        <Input
          disabled={!todoText}
          value={todoText}
          onInputChange={this.onInputChange}
          handleOnAddClick={this.handleOnAddClick}
        />
        <hr />
        {!todos.length && <h3>No Todos</h3>}
        <ul className="todo-list">{this.renderTodosList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({ todos: app.todos });

const mapDispatchToProps = dispatch => ({
  onAddTodo: todo => dispatch(addTodo(todo)),
  onRemoveTodo: todoId => dispatch(removeTodo(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
