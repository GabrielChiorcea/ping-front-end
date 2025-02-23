import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  members: [],
  blog: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export const { setServices, setMembers, setBlog } = dataSlice.actions;
export default dataSlice.reducer;
