import { colors } from "../colors/colors";

export const basics: React.CSSProperties = {
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};

export const dividerHorizontal: React.CSSProperties = {
  width: "90%",
  borderBottom: `1px solid ${colors.color.main}`,
};

export const dividerVertical: React.CSSProperties = {
  height: "80%",
  borderLeft: `1px solid ${colors.color.main}`,
};
