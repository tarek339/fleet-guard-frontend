import { colors } from "../../assets/themes/colors/colors";
import { ISection } from "../../types/interfaces/components/interfaces";

const Section = ({ message, buttonText, onClick }: ISection) => {
  return (
    <>
      <span
        style={{
          fontWeight: 300,
        }}
      >
        {message}&nbsp;
      </span>
      <span
        style={{
          fontWeight: 300,
          cursor: "pointer",
          color: colors.color.secondary,
        }}
        onClick={onClick}
      >
        {buttonText}
      </span>
    </>
  );
};

export default Section;
