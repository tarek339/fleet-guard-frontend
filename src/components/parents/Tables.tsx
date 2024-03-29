import { table, tableTh } from "../../assets/themes/styles";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "../../components/icons";
import {
  ICompany,
  IDriver,
  ITruck,
  IVehicle,
} from "../../types/interfaces/properties";

interface ITable {
  headers: string[];
  propsChildren: JSX.Element[] | JSX.Element | any | undefined;
  property: IDriver[] | IVehicle[] | ITruck[] | ICompany[];
  first: number;
  last: number;
  setFirst: (value: React.SetStateAction<number>) => void | undefined;
  setLast: (value: React.SetStateAction<number>) => void | undefined;
}

const Tables = ({
  headers,
  propsChildren,
  property,
  last,
  first,
  setFirst,
  setLast,
}: ITable) => {
  const nextPage = () => {
    if (last > property.length) return;
    setFirst((prevNum) => prevNum + 5);
    setLast((prevNum) => prevNum + 5);
  };

  const prevPage = () => {
    if (first === 0) return;
    setFirst((prevNum) => prevNum - 5);
    setLast((prevNum) => prevNum - 5);
  };

  return (
    <div
      style={{
        height: "390px",
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
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
        }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}>
          <span>{first === 1 ? first : first + 1}</span>
          <span>-</span>
          <span>{last === 5 ? last : property.length}</span>
          <span>of</span>
          <span>{property.length}</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}>
          <MdOutlineArrowBackIos
            onClick={prevPage}
            style={{ cursor: first === 0 ? "" : "pointer" }}
          />
          <MdOutlineArrowForwardIos
            onClick={nextPage}
            style={{ cursor: last > property.length ? "" : "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tables;
