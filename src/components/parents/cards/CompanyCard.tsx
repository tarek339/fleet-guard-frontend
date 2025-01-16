import { CardButton, FlexColumn, FlexRow } from "../..";
import { card, header, main } from "../../../assets/themes/styles";
import { useDispatches, useNavigation } from "../../../hooks";
import { ICompanyCard } from "../../../types/interfaces/components/interfaces";

const CompanyCard = ({
  company,
  firstName,
  lastName,
  email,
  phone,
  street,
  number,
  zip,
  city,
  licenseNum,
  id,
}: ICompanyCard) => {
  const { openModal } = useDispatches();
  const { navigate } = useNavigation();

  return (
    <div style={card}>
      <FlexColumn gap="20px">
        <span style={{ ...header }}>{company}</span>
        <FlexRow gap="10px">
          <span style={{ ...main }}>{firstName}</span>
          <span style={{ ...main }}> {lastName}</span>
        </FlexRow>
        <span>{email}</span>
        <span>{phone}</span>
        <FlexRow gap="10px">
          <span>{street}</span>
          <span>{number}</span>
        </FlexRow>
        <FlexRow gap="10px">
          <span>{zip}</span>
          <span>{city}</span>
        </FlexRow>
        <span style={{ ...main }}>{licenseNum}</span>
        <FlexRow gap="10px" style={{ justifyContent: "space-between" }}>
          <CardButton
            title={"edit"}
            onClick={() => navigate(`/edit-profile/${id}`)}
          />
          <CardButton title={"delete"} onClick={openModal} />
        </FlexRow>
      </FlexColumn>
    </div>
  );
};

export default CompanyCard;
