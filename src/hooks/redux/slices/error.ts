import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleError } from "../../../types/interfaces/redux/slices";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    error: false,
  },
  reducers: {
    handleError: (state, action: PayloadAction<HandleError>) => {
      state.error = action.payload.error;
    },
  },
});

export const errorReducer = errorSlice.reducer;
export const { handleError } = errorSlice.actions;
