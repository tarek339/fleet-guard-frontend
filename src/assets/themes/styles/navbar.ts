import { colors } from "../colors/colors";

export const navbar: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  textTransform: "uppercase",
  padding: "15px 20px 15px 20px",
  fontWeight: 300,
  fontSize: "1.25rem",
  backgroundColor: "#FFF",
};

export const navbarBtnHolder: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

export const divider: React.CSSProperties = {
  border: `1px solid ${colors.color.secondary}`,
  height: "30px",
};

export const dividerHorizontal: React.CSSProperties = {
  borderBottom: `1.5px solid ${colors.color.secondary}`,
  width: "100%",
};

export const button: React.CSSProperties = {
  color: colors.color.secondary,
  backgroundColor: "transparent",
  border: "none",
  borderTop: "4px solid transparent",
  cursor: "pointer",
  fontSize: "1rem",
  textTransform: "uppercase",
  paddingTop: "5px",
  paddingBottom: "3px",
  borderRadius: "2px",
  fontWeight: 400,
  borderBottom: `2px solid transparent`,
};

export const onHover: React.CSSProperties = {
  transition: "all 0.2s ease",
  borderBottom: `2px solid ${colors.color.secondary}`,
};

export const onFocus: React.CSSProperties = {
  borderBottom: `2px solid ${colors.color.secondary}`,
};

export const mobileMenu: React.CSSProperties = {
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
  height: "100%",
  width: "0%",
  position: "absolute",
  top: 58.5,
  right: 0,
  backgroundColor: "#fff",
  overflow: "hidden",
  transition: "width 0.2s ease-in-out",
  zIndex: 3,
};

export const menuOpen: React.CSSProperties = {
  width: "50%",
};

export const menuContent: React.CSSProperties = {
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  cursor: "pointer",
  fontSize: "1.25rem",
  fontWeight: 300,
};

export const focusedContent: React.CSSProperties = {
  color: colors.color.secondary,
};
