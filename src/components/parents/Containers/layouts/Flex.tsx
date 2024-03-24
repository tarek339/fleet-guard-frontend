import { useBreakPoints } from "../../../../hooks";
import { IFlex } from "../../../../types/interfaces/components/interfaces";

const Flex = ({ gap, children, style, number }: IFlex) => {
  const { windowWidth } = useBreakPoints();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: windowWidth <= number ? "column" : "row",
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
