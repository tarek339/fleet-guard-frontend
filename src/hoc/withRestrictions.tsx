import React, { useEffect } from "react";
import { useNavigation, useSelectors } from "../hooks";

const withRestrictions = (Component: React.ComponentType) => {
  return () => {
    const { admin } = useSelectors();
    const { navigate } = useNavigation();

    useEffect(() => {
      if (!admin) {
        return navigate("/auth");
      }
    }, [admin]);

    if (admin == null) {
      return null;
    }

    return (
      <>
        <Component />
      </>
    );
  };
};

export default withRestrictions;
