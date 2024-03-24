import { useEffect } from "react";
import { useDispatches, useSelectors } from "../../../hooks";
import {
  BackButton,
  Block,
  DividerHorizontal,
  FlexColumn,
  FlexRow,
  Header,
  Modal,
  ModalContent,
} from "../..";
import { card } from "../../../assets/themes/styles/card";
import { IVehicleProfile } from "../../../types/interfaces/components/interfaces";

const VehicleProfile = ({
  title,
  indicator,
  url,
  firstChild,
  secondChild,
  getVehicleProfile,
}: IVehicleProfile) => {
  const { modal } = useSelectors();
  const { closeModal } = useDispatches();

  useEffect(() => {
    getVehicleProfile();
  }, []);

  return (
    <>
      <Modal isVisible={modal} setIsVisible={closeModal}>
        <ModalContent
          url={url}
          header={"Delete truck"}
          mainText={
            "After deleting the profile, all informatiosn will be lost!"
          }
          secondaryText={"Are you sure?"}
        />
      </Modal>
      <Block>
        <BackButton title={title} />
        <div style={{ ...card, paddingBottom: "2.5em" }}>
          <FlexRow style={{ justifyContent: "center" }}>
            <Header title={indicator} />
          </FlexRow>
          <FlexColumn gap="30px">
            {firstChild}
            <FlexRow style={{ justifyContent: "center" }}>
              <DividerHorizontal />
            </FlexRow>
            {secondChild}
          </FlexColumn>
        </div>
      </Block>
    </>
  );
};

export default VehicleProfile;
