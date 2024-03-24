import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandlePage } from "../../types/interfaces/redux/slices";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: 0,
  },
  reducers: {
    handlePage: (state, action: PayloadAction<HandlePage>) => {
      state.page = action.payload.page;
    },
  },
});

export const pageReducer = pageSlice.reducer;
export const { handlePage } = pageSlice.actions;
