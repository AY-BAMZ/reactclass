import Image from "next/image";
import { Inter } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "@/components/AddTodo";
import EditTodo from "@/components/EditTodo";
import { useState } from "react";
import { deleteTodo } from "@/redux/actions/todoActions";
import { useTodoContext } from "@/context/TodoContext";
import AddGaol from "@/components/AddGaol";
import EditGoal from "@/components/EditGoal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [isEditing, setIsEditing] = useState(false);
  // const [editing, setEditing] = useState("");
  // const myArray = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Jane" },
  //   { id: 1, name: "Alice" },
  //   { id: 3, name: "Bob" },
  //   { id: 2, name: "Mike" },
  // ];
  // const getFiltered = (items) => {
  //   const uniqueId = new Set();

  //   return items.reduce((user, index) => {
  //     if (!uniqueId.has(index.id)) {
  //       uniqueId.add(index.id);
  //       user.push(index);
  //     }
  //     return user;
  //   }, []);
  // };

  // const [Todo, setTodo] = useState({
  //   title: "",
  //   description: "",
  //   status: "pending",
  // });

  // console.log("object :>> ", "i " * 8);

  // function simpleArraySum(ar) {
  //   let sum = 0;
  //   const n = ar.length;
  //   for (var i = 0; i < n; i++) {
  //     sum += ar[i];
  //   }
  //   return sum;
  // }

  const { goals, handleDeleteGoal } = useTodoContext();
  const todos = useSelector((state) => state.todos);
  console.log("todos :>> ", todos);
  const [editing, setEditing] = useState(null);
  const [goalEditing, setGoalEditing] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  parseI

  return (
    <main className={`p-5`}>
      <span className="grid grid-cols-3 gap-6">
        <span className="col-span-1 flex flex-col gap-5">
          {todos?.map((item, index) => (
            <span
              key={index}
              className="flex flex-col gap-3 p-4 border border-pink-300 bg-pink-50 rounded-lg"
            >
              <p>{item?.title}</p>
              <p>{item?.text}</p>
              <span className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 w-fit rounded-md ${
                    item?.status === "active"
                      ? "bg-blue-200 text-blue-950"
                      : item?.status === "completed"
                      ? "bg-green-200 text-green-950"
                      : item?.status === "overdue"
                      ? "bg-red-200 text-red-950"
                      : "bg-pink-200 text-pink-950"
                  }`}
                >
                  {item?.status}
                </span>
                <span className="flex gap-2">
                  <button onClick={() => setEditing(item)}>Edit</button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600"
                  >
                    Delete
                  </button>
                </span>
              </span>
            </span>
          ))}
        </span>
        <span className="col-span-1 flex flex-col gap-5">
          {goals?.map((item, index) => (
            <span
              key={index}
              className="flex flex-col gap-3 p-4 border border-pink-300 bg-pink-50 rounded-lg"
            >
              <p>{item?.title}</p>
              <p>{item?.text}</p>
              <span className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 w-fit rounded-md ${
                    item?.status === "active"
                      ? "bg-blue-200 text-blue-950"
                      : item?.status === "completed"
                      ? "bg-green-200 text-green-950"
                      : item?.status === "overdue"
                      ? "bg-red-200 text-red-950"
                      : "bg-pink-200 text-pink-950"
                  }`}
                >
                  {item?.status}
                </span>
                <span className="flex gap-2">
                  <button onClick={() => setGoalEditing(item)}>Edit</button>
                  <button
                    onClick={() => handleDeleteGoal(item.id)}
                    className="bg-red-600"
                  >
                    Delete
                  </button>
                </span>
              </span>
            </span>
          ))}
        </span>
        <span className="col-span-1 flex flex-col gap-16">
          {editing ? (
            <EditTodo todo={editing} setTodo={setEditing} />
          ) : (
            <AddTodo />
          )}
          {goalEditing ? (
            <EditGoal goal={goalEditing} setGoal={setGoalEditing} />
          ) : (
            <AddGaol />
          )}
        </span>
      </span>
    </main>
  );
}
