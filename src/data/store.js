import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import pagesReducer from "./slices/pagesSlice";
import authReducer from "./slices/authSlice";
import settingsReducer from "./slices/settingsSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
    settings: settingsReducer,
    pages: pagesReducer,
  },
});

export default store;
