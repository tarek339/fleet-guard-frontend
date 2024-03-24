import { useEffect } from "react";
import {
  useDispatches,
  useFetchProperties,
  useNavigation,
  useSelectors,
} from "../../hooks";
import withRestrictions from "../../hoc/withRestrictions";
import {
  BackButton,
  Block,
  DividerHorizontal,
  FlexColumn,
  FlexRow,
  Header,
  MainInfo,
  Modal,
  ModalContent,
  SecondaryInfo,
} from "../../components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { card } from "../../assets/themes/styles/card";

const DriverProfile = () => {
  const { getDriverProfile } = useFetchProperties();
  const { dispatchDriver, closeModal } = useDispatches();
  const { navigate } = useNavigation();
  const { driver, modal } = useSelectors();
  const { id } = useParams();

  useEffect(() => {
    getDriverProfile();
  }, []);

  const editDriver = async () => {
    const res = await axios.get(`/driver/driver-profile/${id}`);
    dispatchDriver(res.data);
    navigate(`/edit-driver/${id}`);
  };

  return (
    <>
      <Modal isVisible={modal} setIsVisible={closeModal}>
        <ModalContent
          url={"/driver/delete-profile"}
          header={"Delete driver"}
          mainText={
            "After deleting the profile, all informatiosn will be lost!"
          }
          secondaryText={"Are you sure?"}
        />
      </Modal>
      <Block>
        <BackButton title={"Driver Profile"} />
        <div style={{ ...card, paddingBottom: "2.5em" }}>
          <FlexRow style={{ justifyContent: "center" }}>
            <Header title={driver.firstName + " " + driver.lastName} />
          </FlexRow>
          <FlexColumn gap="30px">
            <MainInfo onEdit={editDriver} />
            <FlexRow style={{ justifyContent: "center" }}>
              <DividerHorizontal />
            </FlexRow>
            <SecondaryInfo />
          </FlexColumn>
        </div>
      </Block>
    </>
  );
};

export default withRestrictions(DriverProfile);
