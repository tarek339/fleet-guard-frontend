import { Style } from "../types/interfaces/themes/breakpoints";
import { useDispatches, useNavigation, useSelectors } from "../hooks";
import {
  dividerHorizontal,
  focusedContent,
  menuContent,
} from "../assets/themes/styles";

const MobileMenu = ({ style }: Style) => {
  const { navigate } = useNavigation();
  const { closeSideBar, removeAdminUser, resetPage } = useDispatches();
  const { admin } = useSelectors();

  const Listing = () => {
    navigate("/");
    closeSideBar();
  };
  const addNewComp = () => {
    navigate("register-company");
    closeSideBar();
  };

  const singOut = () => {
    localStorage.removeItem("token");
    removeAdminUser();
    resetPage();
    closeSideBar();
    navigate("/auth");
    navigate("/");
  };

  return (
    <div style={style}>
      <div style={menuContent}>
        {admin && (
          <>
            <div
              style={window.location.pathname === "/" ? focusedContent : {}}
              onClick={Listing}>
              listing
            </div>
            <div style={dividerHorizontal}></div>
            <div
              style={
                window.location.pathname === "/register-company"
                  ? focusedContent
                  : {}
              }
              onClick={addNewComp}>
              add company
            </div>
            <div style={dividerHorizontal}></div>
          </>
        )}
        <div
          style={window.location.pathname === "/auth" ? focusedContent : {}}
          onClick={singOut}>
          {admin ? "sign out" : "Authentication"}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
