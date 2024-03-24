import PropertyCard from "./PropertyCard";
import {
  BiSolidMessageError,
  MdCheckCircle,
  MdOutlineAddCircle,
} from "../../icons/index";
import { colors } from "../../../assets/themes/colors/colors";
import { useNavigation } from "../../../hooks";

export interface IPropertyCardChild {
  quantity: number;
  url: string;
  notificationInfo: boolean;
  length: number;
  icon: JSX.Element;
  name: string;
}

const PropertyCardChild = ({
  icon,
  name,
  quantity,
  notificationInfo,
  url,
  length,
}: IPropertyCardChild) => {
  const { navigate } = useNavigation();

  const checkIcon = (
    <MdCheckCircle fontSize="32px" style={{ color: colors.color.success }} />
  );
  const errorIcon = (
    <BiSolidMessageError fontSize="32px" style={{ color: "#f44336" }} />
  );
  const addIcon = (
    <MdOutlineAddCircle
      fontSize="32px"
      style={{ color: colors.color.secondary }}
    />
  );

  return (
    <PropertyCard
      property={
        <>
          {icon}
          {name}
        </>
      }
      quantity={quantity}
      notification={
        notificationInfo
          ? errorIcon
          : !notificationInfo && length > 0
          ? checkIcon
          : addIcon
      }
      onClick={length === 0 ? undefined : () => navigate(url)}
    />
  );
};

export default PropertyCardChild;
