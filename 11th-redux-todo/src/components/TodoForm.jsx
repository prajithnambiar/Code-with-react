import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";
import { useState } from "react";
import React from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const submitTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
    console.log(todos);
  };

  return (
    <>
    <div className="px-13 bg-gray-800 text-white text-3xl font-bold py-14 text-center"> My Todo Items</div>
      <form onSubmit={submitTodo} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default TodoForm;
