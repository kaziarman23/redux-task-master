import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/Tasks/TaskSlices";
import userSlice from "./features/User/UserSlice";

export const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
});
