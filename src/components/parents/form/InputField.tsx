import { CustomTextField } from "../../../assets/themes/styles";
import { IInputField } from "../../../types/interfaces/components/interfaces";

const InputField = ({
  name,
  label,
  value,
  onChange,
  error,
  children,
  style,
  type,
}: IInputField) => {
  return (
    <div style={{ width: "100%" }}>
      <CustomTextField
        type={type}
        name={name}
        size="small"
        label={label}
        variant="filled"
        InputProps={{ disableUnderline: true }}
        inputProps={{ style: style }}
        value={value}
        onChange={onChange}
        error={error}
        fullWidth={true}
      />
      <div>{children}</div>
    </div>
  );
};

export default InputField;
