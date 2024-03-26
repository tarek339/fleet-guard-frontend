import { table, tableTh } from "../../assets/themes/styles";
import { useBreakPoints } from "../../hooks";

interface ITable {
  headers: string[];
  propsChildren: JSX.Element[] | JSX.Element | undefined;
}

const Tables = ({ headers, propsChildren }: ITable) => {
  const { windowWidth } = useBreakPoints();

  return (
    <table style={table}>
      <thead>
        <tr>
          {headers.map((header: string, index: number) => {
            if (windowWidth <= 500) {
              if (index === 0 || index === headers.length - 1) {
                return (
                  <th
                    style={{
                      ...tableTh,
                      width: `${headers.length / 100}%`,
                      borderTopLeftRadius: index === 0 ? "8px" : "0px",
                      borderTopRightRadius:
                        index === headers.length - 1 ? "8px" : "0px",
                    }}
                    key={index}>
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
                    borderTopLeftRadius: index === 0 ? "8px" : "0px",
                    borderTopRightRadius:
                      index == headers.length - 1 ? "8px" : "0px",
                  }}
                  key={index}>
                  {header}
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>{propsChildren}</tbody>
    </table>
  );
};

export default Tables;
