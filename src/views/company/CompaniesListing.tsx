import { useEffect, useState } from "react";
import { Block, Header, Tables } from "../../components";
import withRestrictions from "../../hoc/withRestrictions";
import { useDispatches, useFetchProperties, useNavigation } from "../../hooks";
import { colors } from "../../assets/themes/colors/colors";
import axios from "axios";
import { tableTd } from "../../assets/themes/styles";

const CompaniesListing = () => {
  const [option, setOption] = useState(5);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(option);
  const [hoveredRow, setHoveredRow] = useState("");

  const { navigate } = useNavigation();
  const { dispatchCompany, changePage } = useDispatches();
  const { companies, fetchData } = useFetchProperties();

  useEffect(() => {
    changePage(0);
    localStorage.removeItem("company");
  }, []);

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

  useEffect(() => {
    setLast(option);
  }, [last, option]);

  return (
    <Block>
      <Header title={"Companies"} />
      <Tables
        headers={["nr", "companies", "first name", "last name", "city"]}
        propsChildren={companies.map((company, index) => {
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
              onClick={() => getProfile(company._id)}>
              <td
                style={{
                  ...tableTd,
                  borderBottomLeftRadius:
                    index === companies.length - 1 ? "8px" : "0px",
                  textAlign: "center",
                }}>
                {index + 1}
              </td>
              <td style={tableTd}>{company.company}</td>
              <td style={tableTd}>{company.firstName}</td>
              <td style={tableTd}>{company.lastName}</td>
              <td
                style={{
                  ...tableTd,
                  borderBottomRightRadius:
                    index === companies.length - 1 ? "8px" : "0px",
                }}>
                {company.city}
              </td>
            </tr>
          );
        })}
        property={companies}
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

export default withRestrictions(CompaniesListing);
