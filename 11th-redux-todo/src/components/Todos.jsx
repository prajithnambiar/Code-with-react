import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updatedTodo,
 
} from "../features/todo/todoSlice.js";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [editMsg, setEditMsg] = useState("");
  const editTodo = (id) => {
    dispatch(updatedTodo({ id, title: editMsg }));
    setIsTodoEditable(false);
  }

  return (
    <>
      
      <ul>
        {todos.map((todo) => (
          <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
          >
            <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-14 py-2 rounded">
              <div className='text-white'>{todo.title}</div>

              {/* <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => dispatch(toggleCompleted(todo.id))}
              /> */}
              <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-white ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } `}
                value={editMsg}
                onChange={(e) => setEditMsg(e.target.value)}
                readOnly={!isTodoEditable}
              />
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                 

                  if (isTodoEditable) {
                    editTodo(todo.id);
                  } else setIsTodoEditable((prev) => !prev);
                }}
                
              >
                {isTodoEditable ? "📁" : "✏️"}
              </button>

              <button className="ml-15 text-white bg-red-500 border-2 py-1 px-2 focus:outline-none hover:bg-red-400 rounded text-md flex items-center gap-0"
               
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete

                              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="5 0 15 25"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-block ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              </button>
            </li>
          </div>
          
        ))}
      </ul>
    </>
  );
}

export default Todos;
