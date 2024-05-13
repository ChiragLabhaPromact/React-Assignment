import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  selectedValue: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setSelectdValue: (state, action) => {
      state.selectedValue = state.users.find(
        (user) => user.id === action.payload
      );
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.selectedValue = [];
      if (index != -1) {
        state.users[index] = action.payload;
      }
    },
    removeUser: (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload)
    }
  },
});

export const { addUser, setSelectdValue, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
