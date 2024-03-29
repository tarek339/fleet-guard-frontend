import { useEffect, useState } from "react";
import { BackToCompProfile, Block, Tables } from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useFetchProperties, useIDs, useSelectors } from "../../hooks";
import { colors } from "../../assets/themes/colors/colors";
import dayjs from "dayjs";
import { tableTd } from "../../assets/themes/styles";
import { differenceInDays } from "date-fns";

const TrailerListing = () => {
  const [option, setOption] = useState(5);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(option);
  const [hoveredRow, setHoveredRow] = useState("");

  const { fetchProperties, getSingleTrailer } = useFetchProperties();
  const { trailers } = useSelectors();
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

  const arraySlice = trailers.slice(first, last).sort((a, b) => {
    if (a.indicator < b.indicator) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    setLast(option);
  }, [last, option]);

  return (
    <Block>
      <BackToCompProfile title={"Trailer Listing"} />
      <Tables
        headers={[
          "Nr",
          "indicator",
          "type",
          "main inspection",
          "saftey inspection",
        ]}
        propsChildren={arraySlice.map((trailer, index) => {
          return (
            <tr
              key={trailer._id}
              style={{
                backgroundColor:
                  hoveredRow === trailer._id
                    ? "#ddd"
                    : index % 2 === 0
                    ? colors.table.row
                    : colors.table.rowSecond,
              }}
              onMouseEnter={() => handleMouseEnter(trailer._id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => getSingleTrailer(trailer._id)}>
              <td
                style={{
                  ...tableTd,
                  borderBottomLeftRadius:
                    index === arraySlice.length - 1 ? "8px" : "0px",
                  textAlign: "center",
                }}>
                {index + 1}
              </td>
              <td style={tableTd}>{trailer.indicator}</td>
              <td style={tableTd}>{trailer.type}</td>
              <td
                style={{
                  ...tableTd,
                  color:
                    differenceInDays(trailer.nextHU, new Date()) > 31 &&
                    differenceInDays(trailer.nextHU, new Date()) < 91
                      ? colors.color.warning
                      : differenceInDays(trailer.nextHU, new Date()) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(trailer.nextHU, new Date()) < 91
                      ? 400
                      : 300,
                }}>
                {dayjs(trailer.nextHU).format("MM.YYYY")}
              </td>
              <td
                style={{
                  ...tableTd,
                  borderBottomRightRadius:
                    index === arraySlice.length - 1 ? "8px" : "0px",
                  color:
                    differenceInDays(trailer.nextSP, new Date()) > 31 &&
                    differenceInDays(trailer.nextSP, new Date()) < 91
                      ? colors.color.warning
                      : differenceInDays(trailer.nextSP, new Date()) < 31
                      ? "#f44336"
                      : "",
                  fontWeight:
                    differenceInDays(trailer.nextSP, new Date()) < 91
                      ? 400
                      : 300,
                }}>
                {dayjs(trailer.nextSP).format("MM.YYYY")}
              </td>
            </tr>
          );
        })}
        property={trailers}
        first={first}
        last={last}
        setFirst={setFirst}
        setLast={setLast}
        option={option}
        setOption={setOption}
      />
    </Block>
  );
};

export default withRestrictions(TrailerListing);
