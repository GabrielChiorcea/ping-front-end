import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: [],
  services: [],
  members: [],
  blog: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHome: (state, action) => {
      state.home = action.payload;
    },
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

export const { setHome, setServices, setMembers, setBlog } = dataSlice.actions;
export default dataSlice.reducer;
