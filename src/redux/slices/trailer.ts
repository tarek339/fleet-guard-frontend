import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleTrailer } from "../../types/interfaces/redux/slices";

const trailerSlice = createSlice({
  name: "trailer",
  initialState: {
    trailer: {
      _id: "",
      indicator: "",
      brand: "",
      type: "",
      weight: "",
      nextHU: "",
      nextSP: "",
    },
  },
  reducers: {
    addTrailer: (state, action: PayloadAction<HandleTrailer>) => {
      state.trailer = action.payload.trailer;
    },
  },
});

export const trailerReducer = trailerSlice.reducer;
export const { addTrailer } = trailerSlice.actions;
