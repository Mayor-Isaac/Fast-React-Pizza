import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Idyllic',
  age: 19,
  email: 'idyllic@gmail.com',
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    changeName(state, action) {
      // payload = newName
      state.userName = action.payload;
    },
    correctAge(state, action) {
      // payload = real age
      state.age = action.payload;
    },
    updateEmail(state, action) {
      // payload = new email
      state.email = action.payload;
    },
  },
});

export const { changeName, correctAge, updateEmail } = contentSlice.actions;

export default contentSlice.reducer;
