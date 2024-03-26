import { useEffect } from "react";
import { IModal } from "../../../types/interfaces/components/interfaces";
import { modalContent, container } from "../../../assets/themes/styles";

const Modal = ({ children, isVisible, setIsVisible, style }: IModal) => {
  useEffect(() => {
    let modal = document.getElementById("modal");
    window.onclick = function (event) {
      if (modal && event.target == modal) {
        setIsVisible(false);
      }
    };
  }, [isVisible, setIsVisible]);

  return (
    <div
      id="modal"
      style={{ ...container, display: isVisible ? "flex" : "none", ...style }}>
      <div style={modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
