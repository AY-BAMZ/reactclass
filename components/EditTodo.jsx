import { editTodo } from "@/redux/actions/todoActions";
import React from "react";
import { useDispatch } from "react-redux";

function EditTodo({ todo, setTodo }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updates = {
      text: todo.text,
      title: todo.title,
      status: todo.status,
    };
    console.log("todo :>> ", todo);
    dispatch(editTodo({ id: todo.id, updates }));
    setTodo(null);
  };
  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
        <p className="text-[32px]">Edit Todo</p>
        <input
          type="text"
          value={todo?.title}
          placeholder="Enter todo title"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="text"
          value={todo?.text}
          placeholder="Enter todo description"
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
        <select
          name=""
          id=""
          value={todo?.status}
          onChange={(e) => setTodo({ ...todo, status: e.target.value })}
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
          <option value="pending">Pending</option>
        </select>
        <button type="submit">Save Todo</button>
      </form>
    </div>
  );
}

export default EditTodo;
