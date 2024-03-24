import { MdArrowBack } from "react-icons/md";
import { useNavigation } from "../hooks";
import { FlexRow, Header } from ".";
import { IBackButton } from "../types/interfaces/components/interfaces";

const BackButton = ({ title }: IBackButton) => {
  const { navigate } = useNavigation();

  return (
    <FlexRow gap="5px" style={{ alignItems: "center" }}>
      <MdArrowBack
        cursor="pointer"
        fontSize="36px"
        onClick={() => navigate(-1)}
      />
      <Header title={title} />
    </FlexRow>
  );
};

export default BackButton;
