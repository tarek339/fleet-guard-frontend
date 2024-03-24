import { useEffect, useState } from "react";
import { colors } from "../assets/themes/colors/colors";
import { table, tableTd, tableTh } from "../assets/themes/styles/table";
import axios from "axios";
import {
  useBreakPoints,
  useDispatches,
  useFetchProperties,
  useNavigation,
} from "../hooks";

const headers = ["companies", "first name", "last name", "city"];

const Table = () => {
  const [hoveredRow, setHoveredRow] = useState("");

  const { windowWidth } = useBreakPoints();
  const { navigate } = useNavigation();
  const { dispatchCompany } = useDispatches();
  const { companies, fetchData } = useFetchProperties();

  useEffect(() => {
    fetchData();
  }, []);

  const handleMouseEnter = (id: string) => {
    setHoveredRow(id);
  };
  const handleMouseLeave = () => {
    setHoveredRow("");
  };

  const getProfile = async (id: string) => {
    const res = await axios.get(`/company/company-profile/${id}`);
    dispatchCompany(res.data);
    navigate(`/company-profile/${id}`);
  };

  return (
    <table style={table}>
      <thead>
        <tr>
          {headers.map((header, index) => {
            if (windowWidth <= 500) {
              if (index !== 1 && index !== 2) {
                return (
                  <th
                    style={{
                      ...tableTh,
                      width: `${headers.length / 100}%`,
                      borderTopLeftRadius: index == 0 ? "8px" : "0px",
                      borderTopRightRadius:
                        index == headers.length - 1 ? "8px" : "0px",
                    }}
                    key={index}
                  >
                    {header}
                  </th>
                );
              }
            } else {
              return (
                <th
                  style={{
                    ...tableTh,
                    width: `${headers.length / 100}%`,
                    borderTopLeftRadius: index == 0 ? "8px" : "0px",
                    borderTopRightRadius:
                      index == headers.length - 1 ? "8px" : "0px",
                  }}
                  key={index}
                >
                  {header}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => {
          return (
            <tr
              key={company._id}
              style={{
                backgroundColor:
                  hoveredRow === company._id
                    ? "#ddd"
                    : index % 2 === 0
                    ? colors.table.row
                    : colors.table.rowSecond,
                cursor: "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(company._id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => getProfile(company._id)}
            >
              <td
                style={{
                  ...tableTd,
                  borderBottomLeftRadius:
                    index == companies.length - 1 ? "8px" : "0px",
                }}
              >
                {company.company}
              </td>
              {windowWidth >= 500 ? (
                <>
                  <td style={tableTd}>{company.firstName}</td>
                  <td style={tableTd}>{company.lastName}</td>
                </>
              ) : null}

              <td
                style={{
                  ...tableTd,
                  borderBottomRightRadius:
                    index == companies.length - 1 ? "8px" : "0px",
                }}
              >
                {company.city}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
