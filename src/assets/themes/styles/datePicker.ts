import { colors } from "../colors/colors";

export const inputStyle = {
  "&.MuiFilledInput-root": {
    fontSize: "16px",
    height: "39px",
    border: `1px solid ${colors.input.border}`,
    backgroundColor: "transparent",
    borderRadius: "6px",
  },
  "&:hover.MuiFilledInput-root": {
    border: "1px solid lightgrey",
    backgroundColor: colors.input.greyWhite,
  },
  "&.MuiFilledInput-root.Mui-focused": {
    border: `1px solid ${colors.color.secondary}`,
    boxShadow: `0px 0px 0px 1px ${colors.color.secondary} inset`,
    backgroundColor: "transparent",
  },
  "&.MuiFilledInput-root.Mui-error": {
    border: `1px solid #f44336`,
    boxShadow: "0px 0px 0px 1px #f44336 inset",
  },
  "&.MuiInputLabel-root.Mui-error": {
    color: "#f44336",
  },
};

export const labelStyle = {
  "&.MuiInputLabel-root": {
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: 300,
    color: colors.input.placeHolder,
    marginTop: "-4.5px",
  },
  "&.MuiInputLabel-root.Mui-focused": {
    marginTop: "0.2px",
    color: "#2196f3",
    backgroundColor: "transparent",
  },
  "&.MuiInputLabel-root.Mui-error": {
    color: "#f44336",
  },
  "&.MuiInputLabel-root.Mui-focused.Mui-error": {
    color: "#f44336",
  },
};

export const desktopPaper = {
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  border: `1px solid "#a9a9a9"`,
  borderRadius: "8px",
};

export const calendarHeader = {
  borderBottom: `1px solid ${colors.input.border}`,
  marginBottom: "0px",
  paddingBottom: "8px",
};

export const day = {
  "&.MuiPickersDay-today": {
    color: "#2196F3",
    backgroundColor: "#fff",
  },
  "&.MuiButtonBase-root.Mui-selected": {
    backgroundColor: "#2196F3",
    color: "#fff",
  },
  "&.MuiButtonBase-root": {
    border: "none",
    "&:hover": {
      backgroundColor: "#2196F3",
      color: "#fff",
    },
    "&:active": {
      backgroundColor: "#2196F3",
      color: "#fff",
    },
  },
};
