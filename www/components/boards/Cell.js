import * as React from "react";

const EMPTY_COLOR = "#555";
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
      <path
        d="M73.134 63.373l-36.5 21.074L.133 63.374V21.227L36.632.153l36.5 21.073z"
        fill={getColor(value)}
        stroke="#ffffff"
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
