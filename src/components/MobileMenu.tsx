import {
  dividerHorizontal,
  menuContent,
  focusedContent,
} from "../assets/themes/styles/navbar";
import { Style } from "../types/interfaces/themes/breakpoints";
import { useDispatches, useNavigation, useSelectors } from "../hooks";

const MobileMenu = ({ style }: Style) => {
  const { navigate } = useNavigation();
  const { closeSideBar, removeAdminUser } = useDispatches();
  const { admin } = useSelectors();

  const Listing = () => {
    navigate("/listing");
    closeSideBar();
  };
  const addNewComp = () => {
    navigate("register-company");
    closeSideBar();
  };

  const singOut = () => {
    localStorage.removeItem("token");
    removeAdminUser();
    closeSideBar();
    navigate("/");
  };

  return (
    <div style={style}>
      <div style={menuContent}>
        {admin && (
          <>
            <div
              style={
                window.location.pathname === "/listing" ? focusedContent : {}
              }
              onClick={Listing}
            >
              listing
            </div>
            <div style={dividerHorizontal}></div>
            <div
              style={
                window.location.pathname === "/register-company"
                  ? focusedContent
                  : {}
              }
              onClick={addNewComp}
            >
              add company
            </div>
            <div style={dividerHorizontal}></div>
          </>
        )}
        <div
          style={window.location.pathname === "/" ? focusedContent : {}}
          onClick={singOut}
        >
          {admin ? "sign out" : "Authentication"}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
