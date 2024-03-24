import { VehicleMainInfo } from "../..";
import { useDispatches, useSelectors } from "../../../hooks";

const TruckMainInfo = () => {
  const { truck } = useSelectors();
  const { dispatchTruck } = useDispatches();

  return (
    <VehicleMainInfo
      nextHU={truck.nextHU}
      nextSP={truck.nextSP}
      dispatch={dispatchTruck}
      reqUrl={"truck/truck-profile"}
      pathTo={"edit-truck"}
      brand={truck.brand}
      type={truck.type}
      weight={truck.weight}
    />
  );
};

export default TruckMainInfo;
