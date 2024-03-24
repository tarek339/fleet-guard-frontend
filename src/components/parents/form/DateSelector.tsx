import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { IDateSelecter } from "../../../types/interfaces/components/interfaces";
import {
  calendarHeader,
  day,
  desktopPaper,
  inputStyle,
  labelStyle,
} from "../../../assets/themes/styles/datePicker";
import { colors } from "../../../assets/themes/colors/colors";
import { FlexColumn } from "../..";

const DateSelector = (props: IDateSelecter) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <FlexColumn style={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={props.label}
          views={props.views}
          format={props.format}
          value={props.value}
          onChange={props.onChange}
          slotProps={{
            desktopPaper: {
              elevation: 0,
              sx: desktopPaper,
            },
            calendarHeader: {
              sx: calendarHeader,
            },
            day: {
              onMouseDown: () => setOnFocus(false),
              onBlur: () => setOnFocus(false),
              sx: day,
            },
            openPickerButton: {
              onMouseDown: () => setOnFocus(true),
              sx: {
                "&.MuiButtonBase-root": {
                  color: onFocus
                    ? colors.color.secondary
                    : colors.input.placeHolder,
                },
              },
            },
            textField: {
              onMouseDown: () => setOnFocus(true),
              onBlur: () => setOnFocus(false),
              name: props.name,
              fullWidth: true,
              variant: "filled",
              error: props.error,
              size: "small",
              InputProps: {
                disableUnderline: true,
                sx: { ...inputStyle, width: props.width },
              },
              InputLabelProps: {
                sx: labelStyle,
              },
            },
          }}
        />
      </LocalizationProvider>
      <div>{props.errorText}</div>
    </FlexColumn>
  );
};

export default DateSelector;
