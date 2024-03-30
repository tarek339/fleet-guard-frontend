import withRestrictions from "../../hoc/withRestrictions";
import { BackToCompProfile, Block, Tables } from "../../components";
import { useFetchProperties, useIDs, useSelectors } from "../../hooks";
import { useEffect, useState } from "react";
import { colors } from "../../assets/themes/colors/colors";
import dayjs from "dayjs";
import { tableTd } from "../../assets/themes/styles";
import { differenceInDays } from "date-fns";
import { IDriver } from "../../types/interfaces/properties";

const DriversListing = () => {
  const [option, setOption] = useState(5);
  const [hoveredRow, setHoveredRow] = useState("");
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(option);
  const [switchSort, setSwitchSort] = useState(true);

  const { fetchProperties, getSingleDriver } = useFetchProperties();
  const { getProfile } = useIDs();
  const { drivers } = useSelectors();

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

  const sortByLastName = (arr: IDriver[]) => {
    return arr.slice(first, last).sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      return 0;
    });
  };
  const sortByFirstName = (arr: IDriver[]) => {
    return arr.slice(first, last).sort((a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      return 0;
    });
  };

  const sortedByLastName = sortByLastName(drivers);
  const sortedByFirstName = sortByFirstName(drivers);

  const [mapDrivers, setMapDrivers] = useState(sortedByFirstName);

  const changeSort = () => {
    setSwitchSort(!switchSort);
  };

  useEffect(() => {
    if (switchSort) {
      setMapDrivers(sortedByFirstName);
    } else setMapDrivers(sortedByLastName);
  }, [sortedByFirstName, sortedByLastName]);

  return (
    <Block>
      <BackToCompProfile title={"Driver Listing"} />
      <Tables
        headers={[
          "Nr",
          "first name",
          "last name",
          "type valid",
          "code valid",
          "card valid",
        ]}
        propsChildren={mapDrivers.map((driver, index) => {
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
                    index === sortedByFirstName.length - 1 ? "8px" : "0px",
                  textAlign: "center",
                }}>
                {index + 1}
              </td>
              <td style={tableTd}>{driver.firstName}</td>
              <td style={tableTd}>{driver.lastName}</td>
              <td
                style={{
                  ...tableTd,
                  color:
                    differenceInDays(driver.typeValidU, new Date()) > 31 &&
                    differenceInDays(driver.typeValidU, new Date()) < 91
                      ? colors.color.warning
                      : differenceInDays(driver.typeValidU, new Date()) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(driver.typeValidU, new Date()) < 91
                      ? 400
                      : 300,
                }}>
                {dayjs(driver.typeValidU).format("DD.MM.YYYY")}
              </td>
              <td
                style={{
                  ...tableTd,
                  color:
                    differenceInDays(driver.codeNumValidU, new Date()) > 31 &&
                    differenceInDays(driver.codeNumValidU, new Date()) < 91
                      ? colors.color.warning
                      : differenceInDays(driver.codeNumValidU, new Date()) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(driver.codeNumValidU, new Date()) < 91
                      ? 400
                      : 300,
                }}>
                {dayjs(driver.codeNumValidU).format("DD.MM.YYYY")}
              </td>
              <td
                style={{
                  ...tableTd,

                  borderBottomRightRadius:
                    index === sortedByFirstName.length - 1 ? "8px" : "0px",
                  color:
                    differenceInDays(driver.driverCardNumValidU, new Date()) >
                      31 &&
                    differenceInDays(driver.driverCardNumValidU, new Date()) <
                      91
                      ? colors.color.warning
                      : differenceInDays(
                          driver.driverCardNumValidU,
                          new Date()
                        ) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(driver.driverCardNumValidU, new Date()) <
                    91
                      ? 400
                      : 300,
                }}>
                {dayjs(driver.driverCardNumValidU).format("DD.MM.YYYY")}
              </td>
            </tr>
          );
        })}
        property={drivers}
        first={first}
        last={last}
        setFirst={setFirst}
        setLast={setLast}
        sort={`Sort by ${switchSort ? "last" : "first"} name`}
        sortFunction={changeSort}
        option={option}
        setOption={setOption}
      />
    </Block>
  );
};

export default withRestrictions(DriversListing);
