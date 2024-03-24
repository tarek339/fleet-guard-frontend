import { basics } from "./basics";

export const container: React.CSSProperties = {
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  zIndex: 2,
  overflow: "auto",
  height: "100%",
  width: "100%",
  background: "rgba(255, 255, 255, 0.25)",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  top: 0,
};

export const modalContent: React.CSSProperties = {
  backgroundColor: "#FFF",
  padding: "30px",
  borderRadius: "8px",
  marginBottom: "4rem",
  boxShadow: basics.boxShadow,
};

export const modalHeader: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 300,
};

export const modalBody: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 300,
  gap: "30px",
};

export const modalFooter: React.CSSProperties = {
  color: "white",
};

export const modalIcon: React.CSSProperties = {
  borderRadius: "4px",
  width: "25%",
  color: "#fff",
  padding: "4px",
  display: "flex",
  flexFlow: "row",
  justifyContent: "center",
  alignItems: "center",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
  cursor: "pointer",
};
