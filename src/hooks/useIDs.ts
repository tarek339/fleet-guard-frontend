import useDispatches from "./useDispatches";
import axios from "axios";
import { useParams } from "react-router-dom";

const useIDs = () => {
  const { id } = useParams();
  const { dispatchCompany } = useDispatches();

  const getProfile = async () => {
    const res = await axios.get(`/company/company-profile/${id}`);
    dispatchCompany(res.data);
    localStorage.setItem("company", JSON.stringify(res.data));
  };

  return {
    id,
    getProfile,
  };
};

export default useIDs;
