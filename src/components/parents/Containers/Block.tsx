import { IBlock } from "../../../types/interfaces/components/interfaces";
import Motion from "./Motion";

const Block = ({ children, style }: IBlock) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1000px",
        padding: "2em 10px 0px 10px",
        ...style,
      }}
    >
      <Motion>{children}</Motion>
    </div>
  );
};

export default Block;
