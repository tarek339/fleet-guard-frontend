import { useState } from "react";
import { FlexRow } from "../..";
import { cardOnHover, header } from "../../../assets/themes/styles";
import { IPropertyCard } from "../../../types/interfaces/components/interfaces";

const PropertyCard = ({
  property,
  quantity,
  notification,
  onClick,
}: IPropertyCard) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      style={
        onHover
          ? {
              ...cardOnHover,
              transform: "scale(1.1)",
              transition: "transform 0.1s ease-in-out",
            }
          : cardOnHover
      }
      onClick={onClick}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}>
      <FlexRow
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <span
          style={{
            ...header,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}>
          {property}
        </span>
        <span style={header}>{quantity}</span>
        <span
          style={{
            ...header,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          {notification}
        </span>
      </FlexRow>
    </div>
  );
};

export default PropertyCard;
