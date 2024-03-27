import { createSlice } from "@reduxjs/toolkit";
import {
  IDriver,
  ITruck,
  IVehicle,
} from "../../../types/interfaces/properties";

interface InitialState {
  drivers: IDriver[];
  trucks: ITruck[];
  trailers: IVehicle[];
}

const initialState: InitialState = {
  drivers: [],
  trucks: [],
  trailers: [],
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    addDrivers: (state, action) => {
      state.drivers = action.payload.drivers;
    },
    addTrucks: (state, action) => {
      state.trucks = action.payload.trucks;
    },
    addTrailers: (state, action) => {
      state.trailers = action.payload.trailers;
    },
  },
});

export const propertiesReducer = propertiesSlice.reducer;
export const { addDrivers, addTrailers, addTrucks } = propertiesSlice.actions;
