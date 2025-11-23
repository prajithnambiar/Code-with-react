import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos: [
    {
      id: nanoid(),
      title: "first todo",
       completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updatedTodo: (state, action) => {
      const { id, title } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
      } else {
        console.log("todo not found");
      }
    },
    toggleCompleted: (state, action) => {
      const existingTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, updatedTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
