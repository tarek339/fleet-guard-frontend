import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleTruck } from "../../types/interfaces/redux/slices";

const truckSlice = createSlice({
  name: "truck",
  initialState: {
    truck: {
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
    addTruck: (state, action: PayloadAction<HandleTruck>) => {
      state.truck = action.payload.truck;
    },
  },
});

export const truckReducer = truckSlice.reducer;
export const { addTruck } = truckSlice.actions;
