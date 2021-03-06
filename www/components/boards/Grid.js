import * as React from "react";
import Cell from "./Cell";
import {
  calculateTopPosition,
  calculateLeftPosition,
  getCellWidth,
  getCellHeight,
} from "./position";

const Grid = ({ grid, onMovePlayed, ...props }) => {
  const size = Math.sqrt(grid.length);

  const cellWidth = getCellWidth(size);
  const cellHeight = getCellHeight(size);

  const handleCellOnClick = (cellIndex) => {
    onMovePlayed({ cellIndex });
  };

  return (
    <div
      {...props}
      style={{
        position: "absolute",
        height: "90%",
        width: "90%",
        top: "6%",
        left: "4.8%",
      }}
    >
      {Array.from(grid).map((value, index) => {
        const rowIndex = Math.floor(index / size);
        const columnIndex = index % size;

        const top = calculateTopPosition(rowIndex, cellHeight);
        const left = calculateLeftPosition(rowIndex, columnIndex, cellWidth);

        return (
          <Cell
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `calc(${cellWidth}% + 1px)`,
              height: `calc(${cellHeight}% + 1px)`,
            }}
            name={`cell_${index}`}
            key={index}
            value={value}
            aria-label={`Cell at row ${rowIndex} and column ${columnIndex}`}
            role="button"
            onClick={() => handleCellOnClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Grid;
