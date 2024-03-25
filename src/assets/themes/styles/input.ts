import { colors } from "../colors/colors";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@mui/material";

export const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      border: `1px solid ${colors.input.border}`,
      backgroundColor: "transparent",
      borderRadius: "6px",
      height: "39px",
      fontSize: "16px",
    },
    "&:hover .MuiFilledInput-root": {
      border: "1px solid lightgrey",
      backgroundColor: colors.input.greyWhite,
    },
    "& .MuiFilledInput-root.Mui-focused": {
      border: `1px solid ${colors.color.secondary}`,
      boxShadow: `0px 0px 0px 1px ${colors.color.secondary} inset`,
      backgroundColor: "transparent",
    },
    "& .MuiInputBase-input.MuiFilledInput-input.MuiInputBase-inputSizeSmall": {
      paddingBottom: "15px",
      boxSizing: "border-box",
      borderRadius: "6px",
    },
    "& .MuiInputLabel-root": {
      fontSize: "16px",
      fontWeight: 300,
      color: colors.input.placeHolder,
      marginTop: "-4.5px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      backgroundColor: "transparent",
      color: colors.color.secondary,
    },
    "& .MuiFilledInput-root.Mui-error": {
      border: `1px solid #f44336`,
      boxShadow: `0px 0px 0px 1px #f44336 inset`,
    },
    "& .MuiInputLabel-root.Mui-error": {
      color: "#f44336",
    },
  },
})(TextField);
