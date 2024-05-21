const {
  ADD_TODO,
  EDIT_TODO,
  CHANGE_TODO_STATUS,
  DELETE_TODO,
} = require("../actions/todoActions");

const initialState = [];

const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.updates }
          : todo
      );
    case CHANGE_TODO_STATUS:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todosReducers;
