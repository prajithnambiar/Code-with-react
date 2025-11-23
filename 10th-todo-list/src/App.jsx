
import React, { useEffect, useState } from "react"
import { TodoProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodo(todos);

    }

  }, [])

  useEffect(()=> {
   localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])

  const addTodo = (todo) => {
    setTodo((prevTodo) => [{id: Date.now(), ...todo},  ...prevTodo])
  }

  const updatedTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))

  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id))

  }

  const toggleComplete = (id) => {
    setTodo((prev)=> prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))

  }


  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete} }>
<div className="bg-[#040404] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm></TodoForm> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                      {
                        todos.map((todo) =>
                        <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}>

                        </TodoItem>

                        </div> 
                       )
                      }
                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App
