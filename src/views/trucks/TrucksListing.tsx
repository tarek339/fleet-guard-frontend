import { useEffect, useState } from "react";
import { BackToCompProfile, Block, Tables } from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useFetchProperties, useIDs, useSelectors } from "../../hooks";
import { colors } from "../../assets/themes/colors/colors";
import dayjs from "dayjs";
import { tableTd } from "../../assets/themes/styles";
import { differenceInDays } from "date-fns";

const TrucksListing = () => {
  const [hoveredRow, setHoveredRow] = useState("");
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(5);

  const { fetchProperties, getSingleTruck } = useFetchProperties();
  const { trucks } = useSelectors();
  const { getProfile } = useIDs();

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

  const arraySlice = trucks.slice(first, last).sort((a, b) => {
    if (a.indicator < b.indicator) {
      return -1;
    }
    return 0;
  });

  return (
    <Block>
      <BackToCompProfile title={"Truck Listing"} />
      <Tables
        headers={[
          "nr",
          "indicator",
          "type",
          "main inspection",
          "saftey inspection",
          "tacho inspection",
        ]}
        propsChildren={arraySlice.map((truck, index) => {
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
              onClick={() => getSingleTruck(truck._id)}>
              <td
                style={{
                  ...tableTd,
                  borderBottomLeftRadius:
                    index === trucks.length - 1 ? "8px" : "0px",
                  textAlign: "center",
                }}>
                {index + 1}
              </td>
              <td style={tableTd}>{truck.indicator}</td>

              <td style={tableTd}>{truck.type}</td>
              <td
                style={{
                  ...tableTd,
                  color:
                    differenceInDays(truck.nextHU, new Date()) > 31 &&
                    differenceInDays(truck.nextHU, new Date()) < 91
                      ? colors.color.warning
                      : differenceInDays(truck.nextHU, new Date()) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(truck.nextHU, new Date()) < 91 ? 400 : 300,
                }}>
                {dayjs(truck.nextHU).format("MM.YYYY")}
              </td>
              <td
                style={{
                  ...tableTd,
                  color:
                    differenceInDays(truck.nextSP, new Date()) > 31 &&
                    differenceInDays(truck.nextSP, new Date()) < 91
                      ? colors.color.warning
                      : differenceInDays(truck.nextSP, new Date()) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(truck.nextSP, new Date()) < 91 ? 400 : 300,
                }}>
                {dayjs(truck.nextSP).format("MM.YYYY")}
              </td>

              <td
                style={{
                  ...tableTd,
                  borderBottomRightRadius:
                    index === trucks.length - 1 ? "8px" : "0px",
                  color:
                    differenceInDays(truck.nextTachograph, new Date()) > 31 &&
                    differenceInDays(truck.nextTachograph, new Date()) < 91
                      ? colors.color.warning
                      : differenceInDays(truck.nextTachograph, new Date()) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(truck.nextTachograph, new Date()) < 91
                      ? 400
                      : 300,
                }}>
                {dayjs(truck.nextTachograph).format("MM.YYYY")}
              </td>
            </tr>
          );
        })}
        property={trucks}
        first={first}
        last={last}
        setFirst={setFirst}
        setLast={setLast}
      />
    </Block>
  );
};

export default withRestrictions(TrucksListing);
