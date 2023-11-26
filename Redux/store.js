import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 

const store = configureStore({
  reducer: rootReducer, // Truyền Reducer vào configureStore
});

export default store;
// import { createStore } from 'redux';
// import reducer from './reducers';

// const store = createStore(reducer);

// export default store;