import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleDriver } from "../../../types/interfaces/redux/slices";

const driverSlice = createSlice({
  name: "driver",
  initialState: {
    driver: {
      _id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      licenseNum: "",
      licenseType: "",
      typeValidU: "",
      codeNum: "",
      codeNumValidU: "",
      driverCardNum: "",
      driverCardNumValidU: "",
    },
  },
  reducers: {
    addDriver: (state, action: PayloadAction<HandleDriver>) => {
      state.driver = action.payload.driver;
    },
  },
});

export const driverReducer = driverSlice.reducer;
export const { addDriver } = driverSlice.actions;
