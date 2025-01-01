import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../Test/contentSlice';

const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default store;
