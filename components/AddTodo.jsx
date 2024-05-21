import { addTodo } from "@/redux/actions/todoActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    text: "",
    title: "",
    status: "active",
    id: Date.now(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({
      text: "",
      title: "",
      status: "active",
      id: Date.now(),
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
        <p className="text-[32px]">Create Todo</p>
        <input
          type="text"
          value={todo.title}
          placeholder="Enter todo title"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="text"
          value={todo.text}
          placeholder="Enter todo description"
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
