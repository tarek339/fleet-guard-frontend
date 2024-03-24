import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleCompany } from "../../types/interfaces/redux/slices";

const companySlice = createSlice({
  name: "company",
  initialState: {
    company: {
      _id: "",
      company: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      number: "",
      zip: "",
      city: "",
      licenseNum: "",
    },
  },
  reducers: {
    addCompany: (state, action: PayloadAction<HandleCompany>) => {
      state.company = action.payload.company;
    },
  },
});

export const companyReducer = companySlice.reducer;
export const { addCompany } = companySlice.actions;
