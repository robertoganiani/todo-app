import { ADD_TODO, REMOVE_TODO } from './constants';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo
  };
};

export const removeTodo = todoId => {
  return {
    type: REMOVE_TODO,
    todoId
  };
};
