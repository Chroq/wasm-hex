import * as React from "react";
import { Cell as CellEnum } from "wasm-hex";

export const EMPTY_COLOR = "#AAA";
export const WHITE_COLOR = "#FAFAFA";
export const BLACK_COLOR = "#111";

export const EMPTY_SECOND_COLOR = "#999";
export const WHITE_SECOND_COLOR = "#EFEFEF";

export const EMPTY_STROKE_COLOR = "#111";
export const WHITE_STROKE_COLOR = "#AAA";

const Cell = ({ value, style, ...props }) => {
  const { main, second, stroke } = getColors(value);

  return (
    <svg
      tabIndex="0"
      {...props}
      viewBox="0 0 74 84.6"
      preserveAspectRatio="xMinYMax slice"
      style={{
        position: "absolute",
        cursor: "pointer",
        overflow: "visible",
        ...style,
      }}
    >
      <defs>
        <linearGradient id={`Gradient-${value}`}>
          <stop offset="25%" stopColor={second} />
          <stop offset="75%" stopColor={main} />
        </linearGradient>
      </defs>

      <path
        d="M73.134 63.373l-36.5 21.074L.133 63.374V21.227L36.632.153l36.5 21.073z"
        fill={`url(#Gradient-${value})`}
        stroke={stroke}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const getColors = (value) => {
  switch (value) {
    case CellEnum.Empty:
      return {
        main: EMPTY_COLOR,
        second: EMPTY_SECOND_COLOR,
        stroke: EMPTY_STROKE_COLOR,
      };
    case CellEnum.White:
      return {
        main: WHITE_COLOR,
        second: WHITE_SECOND_COLOR,
        stroke: WHITE_STROKE_COLOR,
      };
  }
};

export default Cell;
