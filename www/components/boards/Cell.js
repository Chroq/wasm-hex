import * as React from "react";

const EMPTY_STOP_COLOR = "#AAA";
const EMPTY_COLOR = "#999";
const EMPTY = 0;

const Cell = ({ value, style, ...props }) => {
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
        <linearGradient id="cellGradient">
          <stop offset="25%" stop-color={EMPTY_STOP_COLOR} />
          <stop offset="75%" stop-color={getColor(value)} />
        </linearGradient>
      </defs>

      <path
        d="M73.134 63.373l-36.5 21.074L.133 63.374V21.227L36.632.153l36.5 21.073z"
        fill="url(#cellGradient)"
        stroke="#111"
        strokeWidth={1.5}
      />
    </svg>
  );
};

/**
 * Get color by value.
 *
 * @param {integer} value
 */
const getColor = (value) => {
  switch (value) {
    case EMPTY:
      return EMPTY_COLOR;
  }
};

export default Cell;
