import { useBreakPoints } from "../../../../hooks";
import { IFlex } from "../../../../types/interfaces/components/interfaces";

const FlexRowM = ({ gap, children, style, number }: IFlex) => {
  const { windowWidth } = useBreakPoints();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: windowWidth <= number ? "row" : "column",
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FlexRowM;
