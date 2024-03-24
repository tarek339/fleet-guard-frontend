import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleMenu } from "../../types/interfaces/redux/slices";

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    menu: false,
  },
  reducers: {
    handleMenu: (state, action: PayloadAction<HandleMenu>) => {
      state.menu = action.payload.menu;
    },
  },
});

export const mobileMenuReducer = mobileMenuSlice.reducer;
export const { handleMenu } = mobileMenuSlice.actions;
