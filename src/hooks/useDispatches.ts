import { useDispatch } from "react-redux";
import {
  ICompany,
  IDriver,
  ITruck,
  IVehicle,
} from "../types/interfaces/properties";
import { AxiosResponse } from "axios";
import { useSelectors } from ".";
import {
  handleMenu,
  handleSpinner,
  addCompany,
  handleError,
  handleModal,
  addAdmin,
  removeAdmin,
  handlePage,
  addDriver,
  addTruck,
  addTrailer,
  addDrivers,
  addTrailers,
  addTrucks,
  handleDriversNot,
  handleTrucksNot,
  handleTrailersNot,
} from "../redux/slices";

const useDispatches = () => {
  const dispatch = useDispatch();
  const { page } = useSelectors();

  const openSideBar = () => dispatch(handleMenu({ menu: true }));
  const closeSideBar = () => dispatch(handleMenu({ menu: false }));

  const startLoading = () => dispatch(handleSpinner({ loading: true }));
  const stopLoading = () => dispatch(handleSpinner({ loading: false }));

  const dispatchCompany = (company: ICompany) =>
    dispatch(addCompany({ company }));

  const dispatchDriver = (driver: IDriver) => dispatch(addDriver({ driver }));

  const dispatchTruck = (truck: ITruck) => dispatch(addTruck({ truck }));

  const dispatchTrailer = (trailer: IVehicle) =>
    dispatch(addTrailer({ trailer }));

  const dispatchError = () => dispatch(handleError({ error: true }));
  const removeError = () => dispatch(handleError({ error: false }));

  const openModal = () => dispatch(handleModal({ isVisible: true }));
  const closeModal = () => dispatch(handleModal({ isVisible: false }));

  const dispatchAdmin = (res: AxiosResponse<any, any>) =>
    dispatch(addAdmin(res));

  const removeAdminUser = () => dispatch(removeAdmin());

  const addPage = () => dispatch(handlePage({ page: page + 1 }));
  const removePage = () => dispatch(handlePage({ page: page - 1 }));
  const changePage = (page: number) => dispatch(handlePage({ page: page }));

  const dispatchDrivers = (drivers: IDriver[]) =>
    dispatch(addDrivers({ drivers: drivers }));

  const dispatchTrucks = (trucks: ITruck[]) =>
    dispatch(addTrucks({ trucks: trucks }));

  const dispatchTrailers = (trailers: IVehicle[]) =>
    dispatch(addTrailers({ trailers: trailers }));

  const addDrNotification = () => dispatch(handleDriversNot({ drivers: true }));
  const removeDrNotification = () =>
    dispatch(handleDriversNot({ drivers: false }));

  const addTrucksNotification = () =>
    dispatch(handleTrucksNot({ trucks: true }));
  const removeTrucksNotification = () =>
    dispatch(handleTrucksNot({ trucks: false }));

  const addTrailersNotification = () =>
    dispatch(handleTrailersNot({ trailers: true }));
  const removeTrailersNotification = () =>
    dispatch(handleTrailersNot({ trailers: false }));

  return {
    addDrNotification,
    removeDrNotification,
    addTrucksNotification,
    removeTrucksNotification,
    addTrailersNotification,
    removeTrailersNotification,
    openSideBar,
    closeSideBar,
    startLoading,
    stopLoading,
    dispatchCompany,
    dispatchError,
    removeError,
    openModal,
    closeModal,
    dispatchAdmin,
    addPage,
    removePage,
    removeAdminUser,
    dispatchDriver,
    changePage,
    dispatchTruck,
    dispatchTrailer,
    dispatchDrivers,
    dispatchTrailers,
    dispatchTrucks,
  };
};

export default useDispatches;
