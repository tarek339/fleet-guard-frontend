import { useEffect, useState } from "react";
import { BackToCompProfile, Block, Tables } from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import {
  useBreakPoints,
  useFetchProperties,
  useIDs,
  useSelectors,
} from "../../hooks";
import { colors } from "../../assets/themes/colors/colors";
import dayjs from "dayjs";
import { tableTd } from "../../assets/themes/styles/table";

const TrucksListing = () => {
  const { fetchProperties, getSingleTruck } = useFetchProperties();
  const { windowWidth } = useBreakPoints();
  const { trucks } = useSelectors();
  const { getProfile } = useIDs();
  const [hoveredRow, setHoveredRow] = useState("");

  const handleMouseEnter = (id: string) => {
    setHoveredRow(id);
  };
  const handleMouseLeave = () => {
    setHoveredRow("");
  };

  useEffect(() => {
    getProfile();
    fetchProperties();
  }, []);

  return (
    <Block>
      <BackToCompProfile title={"Truck Listing"} />
      <Tables
        headers={[
          "indicator",
          "type",
          "main inspection",
          windowWidth >= 500 ? "saftey inspection" : "type",
        ]}
        propsChildren={trucks.map((truck, index) => {
          return (
            <tr
              key={truck._id}
              style={{
                backgroundColor:
                  hoveredRow === truck._id
                    ? "#ddd"
                    : index % 2 === 0
                    ? colors.table.row
                    : colors.table.rowSecond,
                cursor: "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(truck._id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => getSingleTruck(truck._id)}
            >
              <td
                style={{
                  ...tableTd,
                  borderBottomLeftRadius:
                    index == trucks.length - 1 ? "8px" : "0px",
                }}
              >
                {truck.indicator}
              </td>

              {windowWidth >= 500 ? (
                <>
                  <td style={tableTd}>{truck.type}</td>
                  <td style={tableTd}>
                    {dayjs(truck.nextHU).format("DD.MM.YYYY")}
                  </td>
                </>
              ) : null}

              <td
                style={{
                  ...tableTd,
                  borderBottomRightRadius:
                    index == trucks.length - 1 ? "8px" : "0px",
                }}
              >
                {windowWidth >= 500
                  ? dayjs(truck.nextSP).format("DD.MM.YYYY")
                  : truck.type}
              </td>
            </tr>
          );
        })}
      />
    </Block>
  );
};

export default withRestrictions(TrucksListing);
