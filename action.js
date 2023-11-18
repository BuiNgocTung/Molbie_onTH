
const initialState = {
    todos: [
      { id: 1, name: 'To check email', completed: false },
      { id: 2, name: 'UI task web page', completed: false },
    ],
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, name: action.payload.name } : todo
          ),
        };
      // Khác
      default:
        return state;
    }
  };
  
  export default todosReducer;
  