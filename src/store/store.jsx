import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import { usersApi } from "./Api/usersApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware
    ),
});
