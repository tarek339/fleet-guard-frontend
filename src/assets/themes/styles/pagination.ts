import { colors } from "../colors/colors";

export const paginationIcon: React.CSSProperties = {
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  paddingLeft: "2px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export const pageNum: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 400,
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export const iconHovered: React.CSSProperties = {
  backgroundColor: colors.backgroundColor.main,
  transition: "background-color 0.2s ease, color 0.2s ease",
  cursor: "pointer",
  color: "#fff",
};

export const focussed: React.CSSProperties = {
  backgroundColor: colors.backgroundColor.main,
  transition: "background-color 0.2s ease, color 0.2s ease",
  color: "#fff",
  cursor: "pointer",
};

export const disabled: React.CSSProperties = {
  backgroundColor: colors.backgroundColor.disabled,
  transition: "background-color 0.2s ease, color 0.2s ease",
  cursor: "default",
};
