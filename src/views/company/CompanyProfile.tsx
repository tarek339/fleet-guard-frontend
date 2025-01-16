import {
  AddData,
  Block,
  CompanyCard,
  Flex,
  FlexColumn,
  Header,
  Modal,
  ModalContent,
  PropertyCardChild,
} from "../../components";
import { useEffect } from "react";
import {
  FaTrailer,
  FaTruckMoving,
  IoPersonCircleSharp,
} from "../../components/icons/index";
import withRestrictions from "../../hoc/withRestrictions";
import {
  useDispatches,
  useFetchProperties,
  useIDs,
  useNotifications,
  useSelectors,
} from "../../hooks";
import { colors } from "../../assets/themes/colors/colors";

const CompanyProfile = () => {
  const {
    company,
    modal,
    drivers,
    trucks,
    trailers,
    driversInfo,
    trucksInfo,
    trailerInfo,
  } = useSelectors();
  const { closeModal } = useDispatches();
  const { id, getProfile } = useIDs();
  const { fetchProperties } = useFetchProperties();
  const { loopDrivers, loopTrailers, loopTrucks } = useNotifications();

  useEffect(() => {
    getProfile();
    fetchProperties();
  }, []);

  useEffect(() => {
    loopDrivers();
    loopTrucks();
    loopTrailers();
  }, [drivers, trucks, trailers, driversInfo, trailerInfo, trucksInfo]);

  return (
    <>
      <Modal isVisible={modal} setIsVisible={closeModal}>
        <ModalContent
          url={"/company/delete-profile"}
          header={"Delete profile"}
          mainText={"After deleting the profile, all properties will be lost!"}
          secondaryText={"Are you sure?"}
        />
      </Modal>
      <Block style={{ position: "relative" }}>
        <Header title={"Profile Dashboard"} />
        <Flex
          number={767}
          gap="30px"
          style={{ justifyContent: "space-between" }}>
          <FlexColumn gap="30px">
            <CompanyCard
              company={company?.company}
              firstName={company?.firstName}
              lastName={company?.lastName}
              phone={company?.phone}
              email={company?.email}
              street={company?.street}
              number={company?.number}
              zip={company?.zip}
              city={company?.city}
              licenseNum={company?.licenseNum}
              id={id}
            />

            <PropertyCardChild
              quantity={drivers.length}
              url={`/drivers-listing/${id}`}
              notificationInfo={driversInfo}
              length={drivers.length}
              icon={
                <IoPersonCircleSharp
                  color={colors.color.secondary}
                  fontSize="26px"
                />
              }
              name={"Drivers"}
            />

            <PropertyCardChild
              icon={
                <FaTruckMoving color={colors.color.secondary} fontSize="26px" />
              }
              name="Trucks"
              quantity={trucks.length}
              url={`/trucks-listing/${id}`}
              notificationInfo={trucksInfo}
              length={trucks.length}
            />

            <PropertyCardChild
              name="Trailer"
              icon={
                <FaTrailer color={colors.color.secondary} fontSize="26px" />
              }
              quantity={trailers.length}
              url={`/trailer-listing/${id}`}
              notificationInfo={trailerInfo}
              length={trailers.length}
            />
          </FlexColumn>
          <AddData />
        </Flex>
      </Block>
    </>
  );
};

export default withRestrictions(CompanyProfile);
