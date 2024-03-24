import { configureStore } from "@reduxjs/toolkit";
import { mobileMenuReducer } from "./slices/navbar";
import { loadingReducer } from "./slices/loading";
import { companyReducer } from "./slices/company";
import { errorReducer } from "./slices/error";
import { modalReducer } from "./slices/modal";
import { adminReducer } from "./slices/admin";
import { pageReducer } from "./slices/pages";
import { driverReducer } from "./slices/driver";
import { truckReducer } from "./slices/trucks";
import { trailerReducer } from "./slices/trailer";
import { propertiesReducer } from "./slices/properties";
import { notficicationReducer } from "./slices/notifications";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    loading: loadingReducer,
    company: companyReducer,
    error: errorReducer,
    modal: modalReducer,
    admin: adminReducer,
    pages: pageReducer,
    driver: driverReducer,
    truck: truckReducer,
    trailer: trailerReducer,
    properties: propertiesReducer,
    notification: notficicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
