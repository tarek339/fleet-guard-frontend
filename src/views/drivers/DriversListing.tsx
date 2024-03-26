import withRestrictions from "../../hoc/withRestrictions";
import { BackToCompProfile, Block, Tables } from "../../components";
import {
  useBreakPoints,
  useFetchProperties,
  useIDs,
  useSelectors,
} from "../../hooks";
import { useEffect, useState } from "react";
import { colors } from "../../assets/themes/colors/colors";
import dayjs from "dayjs";
import { tableTd } from "../../assets/themes/styles";

const DriversListing = () => {
  const { fetchProperties, getSingleDriver } = useFetchProperties();
  const { windowWidth } = useBreakPoints();
  const { getProfile } = useIDs();
  const { drivers } = useSelectors();

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
      <BackToCompProfile title={"Driver Listing"} />
      <Tables
        headers={[
          "first name",
          "last name",
          "type valid",
          "code valid",
          windowWidth >= 500 ? "card valid" : "last name",
        ]}
        propsChildren={drivers.map((driver, index) => {
          return (
            <tr
              key={driver._id}
              style={{
                backgroundColor:
                  hoveredRow === driver._id
                    ? "#ddd"
                    : index % 2 === 0
                    ? colors.table.row
                    : colors.table.rowSecond,
                cursor: "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(driver._id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => getSingleDriver(driver._id)}>
              <td
                style={{
                  ...tableTd,
                  borderBottomLeftRadius:
                    index == drivers.length - 1 ? "8px" : "0px",
                }}>
                {driver.firstName}
              </td>

              {windowWidth >= 500 ? (
                <>
                  <td style={tableTd}>{driver.lastName}</td>
                  <td style={tableTd}>
                    {dayjs(driver.typeValidU).format("DD.MM.YYYY")}
                  </td>
                  <td style={tableTd}>
                    {dayjs(driver.codeNumValidU).format("DD.MM.YYYY")}
                  </td>
                </>
              ) : null}

              <td
                style={{
                  ...tableTd,
                  borderBottomRightRadius:
                    index == drivers.length - 1 ? "8px" : "0px",
                }}>
                {windowWidth >= 500
                  ? dayjs(driver.driverCardNumValidU).format("DD.MM.YYYY")
                  : driver.lastName}
              </td>
            </tr>
          );
        })}
      />
    </Block>
  );
};

export default withRestrictions(DriversListing);
