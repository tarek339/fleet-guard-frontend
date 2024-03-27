import { useState } from "react";
import {
  button,
  divider,
  navbar,
  navbarBtnHolder,
  onHover,
  mobileMenu,
  menuOpen,
  onFocus,
} from "../assets/themes/styles/navbar";
import { breakpoints } from "../assets/themes/breakpoints";
import { IoMdClose, IoIosMenu } from "./icons/index";
import { MobileMenu } from ".";
import {
  useBreakPoints,
  useDispatches,
  useNavigation,
  useSelectors,
} from "../hooks";

const NavBar = () => {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredNew, setIsHoveredNew] = useState(false);
  const [isHoveredAuth, setIsHoveredAuth] = useState(false);
  const { navigate } = useNavigation();
  const { windowWidth } = useBreakPoints();
  const { sideBar, admin } = useSelectors();
  const { closeSideBar, openSideBar, removeAdminUser, resetPage } =
    useDispatches();

  const mouseEnterHome = () => {
    setIsHoveredHome(true);
  };
  const mouseLeaveHome = () => {
    setIsHoveredHome(false);
  };
  const mouseEnterNew = () => {
    setIsHoveredNew(true);
  };
  const mouseLeaveNew = () => {
    setIsHoveredNew(false);
  };
  const mouseEnterAuth = () => {
    setIsHoveredAuth(true);
  };
  const mouseLeaveAuth = () => {
    setIsHoveredAuth(false);
  };

  const pathListing = window.location.pathname === "/";
  const pathRegister = window.location.pathname === "/register-company";
  const pathAuth = window.location.pathname === "/auth";

  return (
    <div style={navbar}>
      <div>
        <span>fleet guard</span>
      </div>
      <div style={navbarBtnHolder}>
        {windowWidth >= breakpoints.md ? (
          <>
            {admin && (
              <>
                <button
                  style={
                    isHoveredHome
                      ? { ...button, ...onHover }
                      : pathListing
                      ? { ...button, ...onFocus }
                      : button
                  }
                  onMouseEnter={mouseEnterHome}
                  onMouseLeave={mouseLeaveHome}
                  onClick={() => navigate("/")}>
                  listing
                </button>
                <div style={divider}></div>
                <button
                  style={
                    isHoveredNew
                      ? { ...button, ...onHover }
                      : pathRegister
                      ? { ...button, ...onFocus }
                      : button
                  }
                  onMouseEnter={mouseEnterNew}
                  onMouseLeave={mouseLeaveNew}
                  onClick={() => navigate("register-company")}>
                  add company
                </button>
                <div style={divider}></div>
              </>
            )}
            <button
              style={
                isHoveredAuth
                  ? { ...button, ...onHover }
                  : pathAuth
                  ? { ...button, ...onFocus }
                  : button
              }
              onMouseEnter={mouseEnterAuth}
              onMouseLeave={mouseLeaveAuth}
              onClick={() => {
                resetPage();
                localStorage.removeItem("token");
                removeAdminUser();
                navigate("/auth");
                navigate("/");
              }}>
              {admin ? "Sign out" : "Authentication"}
            </button>
          </>
        ) : (
          <>
            {!sideBar ? (
              <IoIosMenu onClick={openSideBar} size="28px" />
            ) : (
              <IoMdClose onClick={closeSideBar} size="28px" />
            )}
            <MobileMenu
              style={sideBar ? { ...mobileMenu, ...menuOpen } : mobileMenu}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
