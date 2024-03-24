import {
  TruckMainInfo,
  TruckSecondaryInfo,
  VehicleProfile,
} from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useFetchProperties, useSelectors } from "../../hooks";

const TruckProfile = () => {
  const { getTruckProfile } = useFetchProperties();
  const { truck } = useSelectors();

  return (
    <VehicleProfile
      indicator={truck.indicator}
      url={"/truck/delete-profile"}
      firstChild={<TruckMainInfo />}
      secondChild={<TruckSecondaryInfo />}
      getVehicleProfile={getTruckProfile}
      title={"Truck profile"}
    />
  );
};

export default withRestrictions(TruckProfile);
