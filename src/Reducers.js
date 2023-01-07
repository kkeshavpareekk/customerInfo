import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cur_user: {},
  users: [],
};

export const customReducer = createReducer(initialState, {
  addUsers: (state, action) => {
    state.users = action.payload;
  },
  addCurUser: (state, action) => {
    state.cur_user = action.payload;
  },
});
