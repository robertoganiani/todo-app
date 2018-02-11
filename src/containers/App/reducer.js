import { ADD_TODO, REMOVE_TODO } from './constants';

const initialState = {
  todos: []
};

const appReducer = (state = initialState, action) => {
  const { type, todo, todoId } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [todo, ...state.todos]
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.todoId !== todoId)
      };

    default:
      return state;
  }
};

export default appReducer;
