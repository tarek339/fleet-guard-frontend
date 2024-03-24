import { colors } from "../colors/colors";
import { basics } from "./basics";

export const holder: React.CSSProperties = {
  position: "relative",
  backgroundColor: "#FFF",
  zIndex: 0,
  borderRadius: "6px",
};

export const form: React.CSSProperties = {
  marginTop: "2em",
  margin: "0 auto",
  padding: "30px",
  backgroundColor: "#fff",
  boxShadow: basics.boxShadow,
  borderRadius: "8px",
  fontWeight: 300,
};

export const placeHolder: React.CSSProperties = {
  position: "absolute",
  zIndex: -1,
  top: 10.5,
  left: 17,
  fontSize: "16px",
  transition: "top 0.2s ease, left 0.2s ease, font-size 0.2s ease",
  color: colors.input.placeHolder,
};

export const placeHolderFocussed: React.CSSProperties = {
  top: 4,
  left: 10,
  fontSize: "12px",
};

export const placeHolderError: React.CSSProperties = {
  color: colors.color.error,
};

export const formButton: React.CSSProperties = {
  padding: "10px 16px 8px 16px",
  backgroundColor: colors.backgroundColor.main,
  color: colors.color.primary,
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  textTransform: "uppercase",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  justifyContent: "center",
  alignItems: "center",
  transition: "background-color 0.2s ease",
  borderRadius: "6px",
};

export const loadingSpinner: React.CSSProperties = {
  animation: "rotate 2s linear infinite",
};

export const errorMessage: React.CSSProperties = {
  backgroundColor: "transparent",
  color: "#f44336",
  fontSize: "14px",
  paddingTop: "3px",
  paddingLeft: "10px",
};
