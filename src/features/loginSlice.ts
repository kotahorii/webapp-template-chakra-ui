import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = {
  username: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setPassword, setUsername } = loginSlice.actions;

export const selectUsername = (state: RootState) => state.login.username;

export default loginSlice.reducer;
