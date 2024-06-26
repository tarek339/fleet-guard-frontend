import axios from "axios";
import { useParams } from "react-router-dom";
import { FlexColumn, FlexRow } from "../..";
import { IModalContent } from "../../../types/interfaces/components/interfaces";
import { useState } from "react";
import { useDispatches, useNavigation } from "../../../hooks";
import { MdOutlineCheckCircle, MdOutlineCancel } from "../../icons/index";
import {
  modalBody,
  modalHeader,
  modalIcon,
} from "../../../assets/themes/styles";

const ModalContent = ({
  url,
  header,
  mainText,
  secondaryText,
}: IModalContent) => {
  const { id } = useParams();
  const { navigate } = useNavigation();
  const { closeModal } = useDispatches();
  const [isHoveredCheckIcon, setIsHoveredCheckIcon] = useState(false);
  const [isHoveredCloseIcon, setIsHoveredCloseIcon] = useState(false);

  const deleteProfile = async () => {
    await axios.delete(`${url}/${id}`);
    navigate(-1);
    closeModal();
  };

  return (
    <FlexColumn gap="20px">
      <span style={modalHeader}>{header}</span>
      <span style={modalBody}>{mainText}</span>
      <span style={modalBody}>{secondaryText}</span>
      <FlexRow style={{ justifyContent: "space-between" }}>
        <div
          onMouseEnter={() => setIsHoveredCheckIcon(true)}
          onMouseLeave={() => setIsHoveredCheckIcon(false)}
          onClick={deleteProfile}
          style={{
            ...modalIcon,
            backgroundColor: isHoveredCheckIcon ? "#388e3c" : "#22bb33",
          }}>
          <MdOutlineCheckCircle fontSize="32px" />
        </div>
        <div
          onMouseEnter={() => setIsHoveredCloseIcon(true)}
          onMouseLeave={() => setIsHoveredCloseIcon(false)}
          onClick={closeModal}
          style={{
            ...modalIcon,
            backgroundColor: isHoveredCloseIcon ? "#D32F2F" : "#f44336",
          }}>
          <MdOutlineCancel fontSize="32px" />
        </div>
      </FlexRow>
    </FlexColumn>
  );
};

export default ModalContent;
