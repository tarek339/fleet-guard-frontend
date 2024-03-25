import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  HandleDriversNotification,
  HandleTrailersNotification,
  HandleTrucksNotification,
} from "../../../types/interfaces/redux/slices";

const notficicationSlice = createSlice({
  name: "notficication",
  initialState: {
    drivers: false,
    trucks: false,
    trailers: false,
  },
  reducers: {
    handleDriversNot: (
      state,
      action: PayloadAction<HandleDriversNotification>
    ) => {
      state.drivers = action.payload.drivers;
    },
    handleTrucksNot: (
      state,
      action: PayloadAction<HandleTrucksNotification>
    ) => {
      state.trucks = action.payload.trucks;
    },
    handleTrailersNot: (
      state,
      action: PayloadAction<HandleTrailersNotification>
    ) => {
      state.trailers = action.payload.trailers;
    },
  },
});

export const notficicationReducer = notficicationSlice.reducer;
export const { handleDriversNot, handleTrucksNot, handleTrailersNot } =
  notficicationSlice.actions;
