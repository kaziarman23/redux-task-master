import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/Tasks/TaskSlices";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
