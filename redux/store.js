import { combineReducers, createStore } from "redux";
import todosReducers from "./reducers/todosReducers";
import goalsReducers from "./reducers/goalsReducers";

const rootReducers = combineReducers({
  todos: todosReducers,
  goals: goalsReducers,
});

const store = createStore(rootReducers);

export default store;
