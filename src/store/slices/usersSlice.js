import { createSlice } from "@reduxjs/toolkit";

const initialState = {
users: [],
totalUsers: '',
};

const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === usersSlice.actions.initializeUserFromLocalStorage.type) {
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
      store.dispatch(
        usersSlice.actions.setUsers({
          users: storedUsers,
        })
      );
    }
  }

  return next(action);
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
      localStorage.setItem("users", state.users);
    },
    setTotalUsers(state, action) {
      state.totalUsers = action.payload;
    },
    initializeUserFromLocalStorage() {
      // Пустное действие, middleware будет обрабатывать это действие
    },
  },
});

export const { setUsers, initializeUserFromLocalStorage, setTotalUsers } =
  usersSlice.actions;
export default usersSlice.reducer;
export const usersReducer = usersSlice.reducer;
export { localStorageMiddleware };
