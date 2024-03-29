import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Authentication,
  CompaniesListing,
  CompanyProfile,
  DriverProfile,
  DriversListing,
  EditDriver,
  EditProfile,
  EditTrailer,
  EditTruck,
  NotFound,
  RegisterCompany,
  TrailerListing,
  TrailerProfile,
  TruckProfile,
  TrucksListing,
  VerifyEmail,
} from "./views";
import axios from "axios";
import { useEffect } from "react";
import { useDispatches, useSelectors } from "./hooks";
import { LoadingSpinner, NavBar } from "./components";

function App() {
  const { dispatchAdmin, removeAdminUser } = useDispatches();
  const { admin, adminLoading } = useSelectors();

  const getAdmin = async () => {
    try {
      const res = await axios.get("/admin/get-profile");
      dispatchAdmin(res.data);
    } catch (error) {
      removeAdminUser();
    }
  };

  const checkConnection = async () => {
    const res = await axios.get("/");
    if (!res) {
      localStorage.removeItem("company");
      localStorage.removeItem("token");
      removeAdminUser();
    }
  };

  useEffect(() => {
    getAdmin();
    checkConnection();
  }, [admin]);

  if (adminLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        {admin && admin?.emailVerified ? (
          <Routes>
            <Route path="/" element={<CompaniesListing />} />
            <Route path="/register-company" element={<RegisterCompany />} />
            <Route path="/company-profile/:id" element={<CompanyProfile />} />
            <Route path="/edit-profile/:id" element={<EditProfile />} />
            <Route path="/trucks-listing/:id" element={<TrucksListing />} />
            <Route path="/truck-profile/:id" element={<TruckProfile />} />
            <Route path="/edit-truck/:id" element={<EditTruck />} />
            <Route path="/trailer-listing/:id" element={<TrailerListing />} />
            <Route path="/trailer-profile/:id" element={<TrailerProfile />} />
            <Route path="/edit-trailer/:id" element={<EditTrailer />} />
            <Route path="/drivers-listing/:id" element={<DriversListing />} />
            <Route path="/driver-profile/:id" element={<DriverProfile />} />
            <Route path="/edit-driver/:id" element={<EditDriver />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/auth" element={<Authentication />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
