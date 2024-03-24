import { colors } from "../colors/colors";
import { basics } from "./basics";

export const card: React.CSSProperties = {
  minWidth: "350px",
  height: "auto",
  padding: "20px",
  boxShadow: basics.boxShadow,
  borderRadius: "8px",
  backgroundColor: "#fff",
  fontWeight: 300,
};

export const header: React.CSSProperties = {
  fontSize: "24px",
};
export const main: React.CSSProperties = {
  fontSize: "20px",
};

export const cardButton: React.CSSProperties = {
  padding: "10px 16px 8px 16px",
  color: colors.color.primary,
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  textTransform: "uppercase",
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.2s ease",
  borderRadius: "4px",
  width: "50%",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
};

export const cardOnHover: React.CSSProperties = {
  minWidth: "300px",
  height: "auto",
  padding: "20px",
  boxShadow: basics.boxShadow,
  borderRadius: "8px",
  backgroundColor: "#fff",
  fontWeight: 300,
  cursor: "pointer",
};
