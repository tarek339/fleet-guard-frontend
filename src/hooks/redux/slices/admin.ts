import { createSlice } from "@reduxjs/toolkit";
import { IAdmin } from "../../../types/interfaces/properties";

interface InitialState {
  admin: IAdmin | null;
  loading: boolean;
}

const initialState: InitialState = {
  admin: null,
  loading: true,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action) => {
      state.admin = action.payload;
      state.loading = false;
    },
    removeAdmin: (state) => {
      state.admin = null;
      state.loading = false;
    },
  },
});
export const adminReducer = adminSlice.reducer;
export const { addAdmin, removeAdmin } = adminSlice.actions;
