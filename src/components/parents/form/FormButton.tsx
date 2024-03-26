import { useEffect, useState } from "react";
import { IButton } from "../../../types/interfaces/components/interfaces";
import { useDispatches, useSelectors } from "../../../hooks";
import { BsSendPlusFill, ImSpinner8, GiCheckMark } from "../../icons/index";
import { colors } from "../../../assets/themes/colors/colors";
import { formButton } from "../../../assets/themes/styles";

const FormButton = ({ title, onClick }: IButton) => {
  const [isHovered, setisHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [checked, setChecked] = useState(false);
  const { loading } = useSelectors();
  const { stopLoading } = useDispatches();

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 5);
      }, 10);
      setTimeout(() => {
        stopLoading();
        setChecked(true);
      }, 1500);
      setTimeout(() => {
        setChecked(false);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [loading, checked]);

  return (
    <button
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      style={
        isHovered && !checked
          ? {
              ...formButton,
              backgroundColor: "rgb(23, 105, 170)",
            }
          : checked
          ? { ...formButton, backgroundColor: colors.backgroundColor.success }
          : formButton
      }
      type="submit"
      onClick={onClick}>
      {!loading && !checked ? title : null}
      {loading ? (
        <ImSpinner8
          fontSize={"18px"}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      ) : checked ? (
        <GiCheckMark fontSize={"18px"} />
      ) : (
        <BsSendPlusFill fontSize={"18px"} />
      )}
    </button>
  );
};

export default FormButton;
