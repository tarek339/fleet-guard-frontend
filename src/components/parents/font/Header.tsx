import { IHeader } from "../../../types/interfaces/components/interfaces";

const Header = ({ title, style }: IHeader) => {
  return (
    <h1
      style={{
        fontWeight: 300,
        fontSize: "28px",
        ...style,
      }}
    >
      {title}
    </h1>
  );
};

export default Header;
