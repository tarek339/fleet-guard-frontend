import { IFlexColumn } from "../../../../types/interfaces/components/interfaces";

const FlexColumn = ({ gap, children, style }: IFlexColumn) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FlexColumn;
