import { ISelector } from "../../../types/interfaces/components/interfaces";
import { CustomTextField } from "../../../assets/themes/styles/input";

export default function Selector({
  name,
  label,
  value,
  onChange,
  children,
  error,
  errorText,
}: ISelector) {
  return (
    <div style={{ width: "100%" }}>
      <CustomTextField
        name={name}
        label={label}
        variant="filled"
        fullWidth
        value={value}
        onChange={onChange}
        error={error}
        InputProps={{ disableUnderline: true }}
        select
      >
        {children}
      </CustomTextField>
      <div>{errorText}</div>
    </div>
  );
}
