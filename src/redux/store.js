import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts";

const middleware = getDefaultMiddleware();
//store

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,

  devTools: process.env.NODE_ENV === "development",
});

export default { store };
