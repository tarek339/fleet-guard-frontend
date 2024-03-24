import {
  AddDriver,
  AddTrailer,
  AddTruck,
  FlexColumn,
  Motion,
  Paginantion,
} from ".";
import { card } from "../assets/themes/styles/card";
import { useSelectors } from "../hooks";

const AddData = () => {
  const { page } = useSelectors();
  return (
    <div style={{ ...card, maxWidth: "430px" }}>
      <FlexColumn style={{ justifyContent: "space-between", height: "100%" }}>
        <Motion>
          {page == 0 ? (
            <AddDriver />
          ) : page == 1 ? (
            <AddTruck />
          ) : (
            <AddTrailer />
          )}
        </Motion>
        <Paginantion />
      </FlexColumn>
    </div>
  );
};

export default AddData;
