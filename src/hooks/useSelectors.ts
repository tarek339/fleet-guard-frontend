import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useSelectors = () => {
  const sideBar = useSelector((state: RootState) => state.mobileMenu.menu);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const company = useSelector((state: RootState) => state.company.company);
  const driver = useSelector((state: RootState) => state.driver.driver);
  const error = useSelector((state: RootState) => state.error.error);
  const modal = useSelector((state: RootState) => state.modal.isVisible);
  const admin = useSelector((state: RootState) => state.admin.admin);
  const adminLoading = useSelector((state: RootState) => state.admin.loading);
  const page = useSelector((state: RootState) => state.pages.page);
  const truck = useSelector((state: RootState) => state.truck.truck);
  const trailer = useSelector((state: RootState) => state.trailer.trailer);
  const drivers = useSelector((state: RootState) => state.properties.drivers);
  const trucks = useSelector((state: RootState) => state.properties.trucks);
  const trailers = useSelector((state: RootState) => state.properties.trailers);
  const driversInfo = useSelector(
    (state: RootState) => state.notification.drivers
  );
  const trucksInfo = useSelector(
    (state: RootState) => state.notification.trucks
  );
  const trailerInfo = useSelector(
    (state: RootState) => state.notification.trailers
  );

  return {
    sideBar,
    loading,
    company,
    error,
    modal,
    admin,
    page,
    driver,
    truck,
    trailer,
    adminLoading,
    drivers,
    trucks,
    trailers,
    driversInfo,
    trucksInfo,
    trailerInfo,
  };
};

export default useSelectors;
