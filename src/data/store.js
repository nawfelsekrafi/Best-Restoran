import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import authReducer from "./slices/authSlice";
import settingsReducer from "./slices/settingsSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    settings: settingsReducer,
  },
});

export default store;
