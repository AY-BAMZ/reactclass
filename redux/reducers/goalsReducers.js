const {
  EDIT_GOAL,
  ADD_GOAL,
  CHANGE_GOAL_STATUS,
} = require("../actions/goalsActions");

const initialState = [];

const goalsReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.payload];
    case EDIT_GOAL:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.updates }
          : item
      );
    case CHANGE_GOAL_STATUS:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, status: action.payload.status }
          : item
      );
    default:
      return state;
  }
};

export default goalsReducers;
