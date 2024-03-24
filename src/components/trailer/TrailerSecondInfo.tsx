import { VehicleSecondaryInfo } from "..";
import { useSelectors } from "../../hooks";

const TrailerSecondInfo = () => {
  const { trailer } = useSelectors();

  return (
    <VehicleSecondaryInfo nextHU={trailer.nextHU} nextSP={trailer.nextSP} />
  );
};

export default TrailerSecondInfo;
