import { useNavigate } from "react-router-dom";
import { Navigate } from "../types/interfaces/navigation";

const useNavigation = () => {
  const navigate: Navigate = useNavigate();
  return { navigate };
};

export default useNavigation;
