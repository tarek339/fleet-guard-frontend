import { useEffect, useState } from "react";
import { colors } from "../assets/themes/colors/colors";
import { ImSpinner8 } from "./icons/index";

const LoadingSpinner = () => {
  const [rotation, setRotation] = useState(0);
  const [loading, _setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 5);
      }, 12);
      return () => clearInterval(interval);
    }
  }, [loading]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <ImSpinner8
        style={{
          fontSize: "60px",
          color: colors.color.disabled,
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
