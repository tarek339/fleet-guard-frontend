import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigation } from "../hooks";

const VerifyEmail = () => {
  const [search] = useSearchParams();
  const { navigate } = useNavigation();

  useEffect(() => {
    try {
      axios.post("/admin/verify-email", {
        token: search.get("token"),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  return null;
};

export default VerifyEmail;
