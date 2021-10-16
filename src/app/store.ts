import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import mapReducer from "../features/mapSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    map: mapReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
