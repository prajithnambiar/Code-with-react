import React, { useState } from "react";
import { UseTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = UseTodo();

    const add = (e) => {
        e.preventDefault();
         if(!todo) return;
         addTodo({todo: todo, completed: false})  //we are passing the todo in the form of pbject. There is one more field called id, but that is already defined in app.js
         setTodo("")
    }


    

    return (
        <form   onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;





































