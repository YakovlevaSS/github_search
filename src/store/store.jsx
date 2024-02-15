import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import { usersApi } from "./Api/usersApi";
import { localStorageMiddleware } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      localStorageMiddleware,
      usersApi.middleware
    ),
});
