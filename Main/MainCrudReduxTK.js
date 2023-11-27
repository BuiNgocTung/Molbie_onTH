import React from 'react';
import { Provider } from 'react-redux';
import store from '../rtk/store'; // Import store đã tạo

import CrudReduxTK from '../Crud/CrudReduxTK'; // Thay đổi path tới component Calculator của bạn nếu cần

export default function MainCrudRedux() {
  return (
    <Provider store={store}>
      <CrudReduxTK />
    </Provider>
  );
}