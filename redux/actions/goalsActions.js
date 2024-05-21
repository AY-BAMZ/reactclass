export const ADD_GOAL = "ADD_GOAL";
export const EDIT_GOAL = "EDIT_GOAL";
export const CHANGE_GOAL_STATUS = "CHANGE_GOAL_STATUS";

export const addGoal = (goal) => ({
  type: ADD_GOAL,
  payload: goal,
});

export const editGoal = (id, updates) => ({
  type: EDIT_GOAL,
  payload: { id, updates },
});

export const changeGoalStatus = (id, status) => ({
  type: CHANGE_GOAL_STATUS,
  payload: { id, status },
});
