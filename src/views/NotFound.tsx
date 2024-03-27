import { useEffect } from "react";
import { useSelectors } from "../hooks";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const { admin } = useSelectors();

  useEffect(() => {
    if (admin && admin?.emailVerified) {
      navigate(-1);
    }
    if (!admin) {
      navigate("/auth");
    }
  }, []);
  return <></>;
};

export default NotFound;
