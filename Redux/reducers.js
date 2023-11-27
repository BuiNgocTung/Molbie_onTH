const initialState = {
    // Khởi tạo trạng thái ban đầu của ứng dụng
    todos: [
      { id: 1, name: 'Bùi Ngọc Tùng' },
      { id: 2, name: 'Lê Trung Chanh' },
      
    ],
    result: 0,
  };
  
  const reducers = (state = initialState, action) => {
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
        case 'SEARCH_TODO':
          return {
            ...state,
            searchQuery: action.payload, // Lưu trữ query tìm kiếm trong state
          };

          //
            case 'ADD':
              return {
                ...state,
                result: state.result + action.payload,
              };
            case 'SUBTRACT':
              return {
                ...state,
                result: state.result - action.payload,
              };
            case 'MULTIPLY':
              return {
                ...state,
                result: state.result * action.payload,
              };
            case 'DIVIDE':
              return {
                ...state,
                result: state.result / action.payload,
              };
            case 'RESET':
              return {
                ...state,
                result: 0,
              };
      default:
        return state;
    }
  };
  
  export default reducers;
  