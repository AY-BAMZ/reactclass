import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import TodoProvider from "./TodoContext";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <TodoProvider>{children}</TodoProvider>
    </Provider>
  );
}

export default Providers;
