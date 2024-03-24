import { IHeader } from "../../../types/interfaces/components/interfaces";

const HeaderSmall = ({ title, style }: IHeader) => {
  return (
    <h1
      style={{
        fontWeight: 300,
        fontSize: "24px",
        ...style,
      }}
    >
      {title}
    </h1>
  );
};

export default HeaderSmall;
