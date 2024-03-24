import axios from "axios";
import { useParams } from "react-router-dom";
import { FlexColumn, FlexRow } from "../..";
import {
  modalBody,
  modalHeader,
  modalIcon,
} from "../../../assets/themes/styles/modal";
import { IModalContent } from "../../../types/interfaces/components/interfaces";
import { useState } from "react";
import { useDispatches, useNavigation } from "../../../hooks";
import { MdOutlineCheckCircle, MdOutlineCancel } from "../../icons/index";

const ModalContent = ({ url }: IModalContent) => {
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
      <span style={modalHeader}>Delete profile?</span>
      <span style={modalBody}>Delete profile and all properties.</span>
      <span style={modalBody}>Are you sure?</span>
      <FlexRow style={{ justifyContent: "space-between" }}>
        <div
          onMouseEnter={() => setIsHoveredCheckIcon(true)}
          onMouseLeave={() => setIsHoveredCheckIcon(false)}
          onClick={deleteProfile}
          style={{
            ...modalIcon,
            backgroundColor: isHoveredCheckIcon ? "#388e3c" : "#22bb33",
          }}
        >
          <MdOutlineCheckCircle fontSize="32px" />
        </div>
        <div
          onMouseEnter={() => setIsHoveredCloseIcon(true)}
          onMouseLeave={() => setIsHoveredCloseIcon(false)}
          onClick={closeModal}
          style={{
            ...modalIcon,
            backgroundColor: isHoveredCloseIcon ? "#D32F2F" : "#f44336",
          }}
        >
          <MdOutlineCancel fontSize="32px" />
        </div>
      </FlexRow>
    </FlexColumn>
  );
};

export default ModalContent;
