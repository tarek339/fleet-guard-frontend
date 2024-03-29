import { useEffect } from "react";
import { table, tableTh } from "../../assets/themes/styles";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "../../components/icons";
import { ITable } from "../../types/interfaces/components/interfaces";

const Tables = ({
  headers,
  propsChildren,
  property,
  last,
  first,
  option,
  sort,
  setFirst,
  setLast,
  setOption,
  sortFunction,
}: ITable) => {
  const nextPage = () => {
    if (last >= property.length) return;
    setFirst((prevNum) => prevNum + option);
    setLast((prevNum) => prevNum + option);
  };

  const prevPage = () => {
    if (first === 0) return;
    setFirst((prevNum) => prevNum - option);
    setLast((prevNum) => prevNum - option);
  };

  const rows = ["5", "10", "20"];

  useEffect(() => {
    console.log("first", first);
    console.log("last", last);
    console.log("option", option);
  }, [first, last, option]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = +e.target.value;
    if (newValue > option) {
      setLast((prevNum) => prevNum + option);
    } else setLast(newValue);
    setOption(newValue);
  };

  return (
    <div
      style={{
        height: "395px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <table style={table}>
        <thead>
          <tr>
            {headers.map((header: string, index: number) => {
              return (
                <th
                  style={{
                    ...tableTh,
                    width:
                      index === 0 ? "30px" : `${100 / (headers.length - 1)}%`,
                    borderTopLeftRadius: index === 0 ? "8px" : "0px",
                    borderTopRightRadius:
                      index == headers.length - 1 ? "8px" : "0px",
                  }}
                  key={index}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{propsChildren}</tbody>
      </table>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={sortFunction}>
          {sort}
        </div>
        <div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}>
            <select
              style={{ width: "50px", height: "25px", cursor: "pointer" }}
              value={option}
              onChange={handleChange}>
              {rows.map((row, i) => {
                return (
                  <option key={i} value={row}>
                    {row}
                  </option>
                );
              })}
            </select>
            <div style={{ display: "flex", gap: "10px" }}>
              <span>{first + 1}</span>
              <span>-</span>
              <span>{last}</span>
              <span>of</span>
              <span>{property.length}</span>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <MdOutlineArrowBackIos
                onClick={prevPage}
                style={{ cursor: first === 0 ? "" : "pointer" }}
              />
              <MdOutlineArrowForwardIos
                onClick={nextPage}
                style={{ cursor: last >= property.length ? "" : "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
