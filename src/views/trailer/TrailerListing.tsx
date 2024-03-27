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
import { tableTd } from "../../assets/themes/styles";

const TrailerListing = () => {
  const { fetchProperties, getSingleTrailer } = useFetchProperties();
  const { windowWidth } = useBreakPoints();
  const { trailers } = useSelectors();
  const [hoveredRow, setHoveredRow] = useState("");
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

  return (
    <Block>
      <BackToCompProfile title={"Trailer Listing"} />
      <Tables
        headers={[
          "indicator",
          "type",
          "main inspection",
          windowWidth >= 500 ? "saftey inspection" : "type",
        ]}
        propsChildren={trailers.map((trailer, index) => {
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
                cursor: "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(trailer._id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => getSingleTrailer(trailer._id)}>
              <td
                style={{
                  ...tableTd,
                  borderBottomLeftRadius:
                    index == trailers.length - 1 ? "8px" : "0px",
                }}>
                {trailer.indicator}
              </td>

              {windowWidth >= 500 ? (
                <>
                  <td style={tableTd}>{trailer.type}</td>
                  <td style={tableTd}>
                    {dayjs(trailer.nextHU).format("MM.YYYY")}
                  </td>
                </>
              ) : null}

              <td
                style={{
                  ...tableTd,
                  borderBottomRightRadius:
                    index == trailers.length - 1 ? "8px" : "0px",
                }}>
                {windowWidth >= 500
                  ? dayjs(trailer.nextSP).format("MM.YYYY")
                  : trailer.type}
              </td>
            </tr>
          );
        })}
      />
    </Block>
  );
};

export default withRestrictions(TrailerListing);
