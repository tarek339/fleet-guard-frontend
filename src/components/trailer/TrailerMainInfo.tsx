import { VehicleMainInfo } from "..";
import { useDispatches, useSelectors } from "../../hooks";

const TrailerMainInfo = () => {
  const { dispatchTrailer } = useDispatches();
  const { trailer } = useSelectors();

  return (
    <VehicleMainInfo
      dispatch={dispatchTrailer}
      nextHU={trailer.nextHU}
      nextSP={trailer.nextSP}
      reqUrl={"trailer/trailer-profile"}
      pathTo={"edit-trailer"}
      brand={trailer.brand}
      type={trailer.type}
      weight={trailer.weight}
    />
  );
};

export default TrailerMainInfo;
