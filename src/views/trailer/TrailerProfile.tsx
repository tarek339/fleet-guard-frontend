import {
  TrailerMainInfo,
  TrailerSecondInfo,
  VehicleProfile,
} from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useFetchProperties, useSelectors } from "../../hooks";

const TrailerProfile = () => {
  const { getTrailerProfile } = useFetchProperties();
  const { trailer } = useSelectors();
  return (
    <VehicleProfile
      indicator={trailer.indicator}
      url={"/trailer/delete-profile"}
      firstChild={<TrailerMainInfo />}
      secondChild={<TrailerSecondInfo />}
      getVehicleProfile={getTrailerProfile}
      title={"Trailer profile"}
    />
  );
};

export default withRestrictions(TrailerProfile);
