import { useState } from "react";
import { colors } from "../../../assets/themes/colors/colors";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { ICardButton } from "../../../types/interfaces/components/interfaces";
import { cardButton } from "../../../assets/themes/styles";

const CardButton = ({ title, onClick }: ICardButton) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      onClick={onClick}
      style={
        isHovered
          ? {
              ...cardButton,
              backgroundColor:
                title === "edit" ? "rgb(23, 105, 170)" : "#D32F2F",
            }
          : {
              ...cardButton,
              backgroundColor:
                title === "edit"
                  ? colors.backgroundColor.main
                  : colors.backgroundColor.error,
            }
      }>
      {title}
      {title === "edit" ? (
        <MdEdit fontSize="20px" />
      ) : (
        <MdDeleteForever fontSize="20px" />
      )}
    </button>
  );
};

export default CardButton;
