import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "Mir Hussain",
  email: "mir@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
