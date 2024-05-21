export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const editTodo = ({ id, updates }) => ({
  type: EDIT_TODO,
  payload: { id, updates },
});

export const changeTodoStatus = (id, status) => ({
  type: CHANGE_TODO_STATUS,
  payload: { id, status },
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id, status },
});
