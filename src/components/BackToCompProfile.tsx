import { MdArrowBack } from "react-icons/md";
import { useNavigation, useSelectors } from "../hooks";
import { FlexRow, Header } from ".";
import { IBackButton } from "../types/interfaces/components/interfaces";

const BackToCompProfile = ({ title }: IBackButton) => {
  const { navigate } = useNavigation();
  const { company } = useSelectors();

  return (
    <FlexRow gap="5px" style={{ alignItems: "center" }}>
      <MdArrowBack
        cursor="pointer"
        fontSize="36px"
        onClick={() => navigate(`/company-profile/${company._id}`)}
      />
      <Header title={title} />
    </FlexRow>
  );
};

export default BackToCompProfile;
