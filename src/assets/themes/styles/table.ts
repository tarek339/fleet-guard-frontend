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
};

export const tableTh: React.CSSProperties = {
  borderSpacing: 0,
  padding: "20px",
  backgroundColor: colors.table.head,
  color: colors.color.main,
  fontWeight: 400,
};

export const tableTd: React.CSSProperties = {
  borderSpacing: 0,
  padding: "20px",
  fontWeight: 300,
};
