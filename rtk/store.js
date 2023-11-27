import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers'; // Đường dẫn đến slice

const store = configureStore({
  reducer:reducers,
  
});

export default store;