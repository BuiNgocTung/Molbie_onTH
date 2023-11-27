import React from 'react';
import { Provider } from 'react-redux';
import store from '../Redux/store'; // Import store đã tạo

import CrudRedux from '../Crud/CrudRedux'; // Thay đổi path tới component Calculator của bạn nếu cần

export default function MainCrudRedux() {
  return (
    <Provider store={store}>
      <CrudRedux />
    </Provider>
  );
}