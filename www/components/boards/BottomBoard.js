import * as React from "react";
import { WHITE_COLOR, BLACK_COLOR } from "./Cell";

const BottomBoard = (props) => {
  return (
    <svg
      style={{ width: "100%", height: "100%" }}
      viewBox="-1 0 177 104.46"
      {...props}
    >
      <g>
        <path
          fill={WHITE_COLOR}
          stroke="black"
          strokeLinejoin="bevel"
          d="M.781 2.23c2.582-4.473 0 0 116.603-1.962l-30 51.962L.78 2.23z"
        />
        <path
          fill={WHITE_COLOR}
          stroke="black"
          strokeLinejoin="bevel"
          d="M173.986 102.23c-2.582 4.473 0 0-116.602 1.962l30-51.962 86.602 50z"
        />
        <path
          fill={BLACK_COLOR}
          stroke="black"
          strokeLinejoin="bevel"
          d="M.781 2.23c-2.582 4.473 0 0 56.603 101.962l30-51.962L.78 2.23z"
        />
        <path
          fill={BLACK_COLOR}
          stroke="black"
          strokeLinejoin="bevel"
          d="M173.986 102.23c2.583-4.473 0 0-56.602-101.962l-30 51.962 86.602 50z"
        />
      </g>
    </svg>
  );
};

export default BottomBoard;
