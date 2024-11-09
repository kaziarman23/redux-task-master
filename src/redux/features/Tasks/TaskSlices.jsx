import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  userTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "panding", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "panding",
          ...payload,
        });
      }
    },

    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },

    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      target.status = payload.status;
    },

    userTask: (state, { payload }) => {
      state.userTasks = state.tasks.filter(
        (task) => task.assignedTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, userTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
