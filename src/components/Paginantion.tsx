import { MdArrowForwardIos } from "react-icons/md";
import { FlexRow } from ".";
import {
  iconHovered,
  pageNum,
  paginationIcon,
  focussed,
  disabled,
} from "../assets/themes/styles/pagination";
import { useEffect, useState } from "react";
import { useDispatches, useSelectors } from "../hooks";

const pages = ["1", "2", "3"];

const Paginantion = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredRight, setisHoveredRight] = useState(false);
  const [isHoveredPage, setIsHoveredPage] = useState<number | null>(null);

  const { page } = useSelectors();
  const { addPage, removePage, changePage } = useDispatches();

  useEffect(() => {
    if (page == 0) {
      setIsHovered(false);
    }
    if (page == pages.length - 1) {
      setisHoveredRight(false);
    }
  }, [page]);

  const handleMouseEnter = (i: number) => {
    setIsHoveredPage(i);
  };
  const handleMouseLeave = () => {
    setIsHoveredPage(null);
  };

  return (
    <FlexRow
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1em",
        gap: "2em",
      }}
    >
      <div
        onMouseEnter={page !== 0 ? () => setIsHovered(true) : undefined}
        onMouseLeave={() => setIsHovered(false)}
        style={
          isHovered
            ? { ...iconHovered, ...paginationIcon, transform: "rotate(180deg)" }
            : page == 0
            ? { ...paginationIcon, ...disabled, transform: "rotate(180deg)" }
            : { ...paginationIcon, transform: "rotate(180deg)" }
        }
        onClick={page !== 0 ? removePage : undefined}
      >
        <MdArrowForwardIos fontSize="18px" />
      </div>
      <>
        {pages.map((num, i) => {
          return (
            <span
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              key={i}
              style={
                isHoveredPage == i
                  ? { ...pageNum, ...iconHovered }
                  : page == i
                  ? { ...pageNum, ...focussed }
                  : pageNum
              }
              onClick={() => changePage(i)}
            >
              {num}
            </span>
          );
        })}
      </>
      <div
        onMouseEnter={() => setisHoveredRight(true)}
        onMouseLeave={() => setisHoveredRight(false)}
        style={
          isHoveredRight
            ? { ...iconHovered, ...paginationIcon }
            : page == pages.length - 1
            ? { ...paginationIcon, ...disabled }
            : { ...paginationIcon }
        }
        onClick={page !== 2 ? addPage : undefined}
      >
        <MdArrowForwardIos fontSize="18px" />
      </div>
    </FlexRow>
  );
};

export default Paginantion;
