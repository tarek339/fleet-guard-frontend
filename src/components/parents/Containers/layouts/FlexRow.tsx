import { IFlexRow } from "../../../../types/interfaces/components/interfaces";

const FlexRow = ({ gap, children, style }: IFlexRow) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FlexRow;
