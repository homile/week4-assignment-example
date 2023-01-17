import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  comments: [],
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (state) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
    },
    getCommentsError: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
    },
  },
});

export const commentsActions = commentsSlice.actions;

export default commentsSlice.reducer;
