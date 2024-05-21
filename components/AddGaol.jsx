import { useTodoContext } from "@/context/TodoContext";
import React, { useState } from "react";

function AddGaol() {
  const { handleAddGoal } = useTodoContext();

  const [todo, setTodo] = useState({
    text: "",
    title: "",
    status: "active",
    id: Date.now(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGoal(todo);
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
        <p className="text-[32px]">Create Goal</p>
        <input
          type="text"
          value={todo.title}
          placeholder="Enter goal title"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="text"
          value={todo.text}
          placeholder="Enter goal description"
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
        <button type="submit">Create Goal</button>
      </form>
    </div>
  );
}

export default AddGaol;
