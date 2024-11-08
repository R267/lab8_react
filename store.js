import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menuReducer';
import logoReducer from './reducers/logoReducer';
import dateReducer from './reducers/dateReducer';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    logo: logoReducer,
    date: dateReducer,
  },
});

export default store;