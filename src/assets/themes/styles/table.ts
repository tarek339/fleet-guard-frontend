import { colors } from "../colors/colors";
import { basics } from "./basics";

export const table: React.CSSProperties = {
  boxShadow: basics.boxShadow,
  width: "100%",
  textAlign: "left",
  borderSpacing: 0,
  borderRadius: "8px",
  textTransform: "uppercase",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  marginTop: "2em",
  backgroundColor: "#fff",
};

export const tableTh: React.CSSProperties = {
  borderSpacing: 0,
  padding: "18px 15px 14px",
  backgroundColor: colors.table.head,
  color: colors.color.main,
  fontWeight: 400,
  borderBottom: "1px solid #000",
};

export const tableTd: React.CSSProperties = {
  borderSpacing: 0,
  padding: "15px",
  fontWeight: 300,
  cursor: "pointer",
};
