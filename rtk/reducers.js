import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: 0,
  todos: [
    { id: 1, name: 'Bùi Ngọc Tùng' },
    { id: 2, name: 'Lê Trung Chanh' },
    
  ],
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state, action) => {
      state.result += action.payload;
    },
    subtract: (state, action) => {
      state.result -= action.payload;
    },
    multiply: (state, action) => {
      state.result *= action.payload;
    },
    divide: (state, action) => {
      state.result /= action.payload;
    },
    reset: (state) => {
      state.result = 0;
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo
      );
    },
  },
});

export const { add, subtract, multiply, divide, reset,addTodo,deleteTodo,updateTodo } = calculatorSlice.actions;
export default calculatorSlice.reducer;

