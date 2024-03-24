import { differenceInDays } from "date-fns";
import { useDispatches, useSelectors } from ".";

const useNotifications = () => {
  const { trucks, trailers, drivers } = useSelectors();
  const {
    addDrNotification,
    removeDrNotification,
    addTrucksNotification,
    removeTrucksNotification,
    addTrailersNotification,
    removeTrailersNotification,
  } = useDispatches();

  const loopDrivers = () => {
    const findElement = drivers.find(
      (driver) =>
        differenceInDays(new Date(driver.typeValidU), new Date()) < 91 ||
        differenceInDays(new Date(driver.codeNumValidU), new Date()) < 91 ||
        differenceInDays(new Date(driver.driverCardNumValidU), new Date()) < 91
    );

    if (findElement) {
      return addDrNotification();
    } else {
      return removeDrNotification();
    }
  };

  const loopTrucks = () => {
    const findElement = trucks.find(
      (truck) =>
        differenceInDays(new Date(truck.nextHU), new Date()) < 91 ||
        differenceInDays(new Date(truck.nextSP), new Date()) < 91
    );

    if (findElement) {
      return addTrucksNotification();
    } else {
      return removeTrucksNotification();
    }
  };

  const loopTrailers = () => {
    const findElement = trailers.find(
      (trailer) =>
        differenceInDays(new Date(trailer.nextHU), new Date()) < 91 ||
        differenceInDays(new Date(trailer.nextSP), new Date()) < 91
    );

    if (findElement) {
      return addTrailersNotification();
    } else {
      return removeTrailersNotification();
    }
  };

  return {
    loopDrivers,
    loopTrucks,
    loopTrailers,
  };
};

export default useNotifications;
