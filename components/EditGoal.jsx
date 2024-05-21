import { useTodoContext } from "@/context/TodoContext";
import React from "react";

function EditGoal({ goal, setGoal }) {
  const { handleEditGoals } = useTodoContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      text: goal.text,
      title: goal.title,
      status: goal.status,
    };
    handleEditGoals({ id: goal.id, values });
    setGoal(null);
  };
  return (
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
        <p className="text-[32px]">Edit goal</p>
        <input
          type="text"
          value={goal?.title}
          placeholder="Enter goal title"
          onChange={(e) => setGoal({ ...goal, title: e.target.value })}
        />
        <input
          type="text"
          value={goal?.text}
          placeholder="Enter goal description"
          onChange={(e) => setGoal({ ...goal, text: e.target.value })}
        />
        <select
          name=""
          id=""
          value={goal?.status}
          onChange={(e) => setGoal({ ...goal, status: e.target.value })}
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
          <option value="pending">Pending</option>
        </select>
        <button type="submit">Save goal</button>
      </form>
    </div>
  );
}

export default EditGoal;
