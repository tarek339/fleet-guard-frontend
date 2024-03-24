import { VehicleSecondaryInfo } from "../..";
import { useSelectors } from "../../../hooks";

const TruckSecondaryInfo = () => {
  const { truck } = useSelectors();

  return <VehicleSecondaryInfo nextHU={truck.nextHU} nextSP={truck.nextSP} />;
};

export default TruckSecondaryInfo;
