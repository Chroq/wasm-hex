import * as React from "react";
import { Board } from "wasm-hex";
import BottomBoard from "./BottomBoard";
import { memory } from "wasm-hex/wasm_hex_bg";
import Grid from "./Grid";
import { getBoardRatio } from "./position";

const PlayBoard = ({size, ...props}) => {
  if (!size) {
    return <></>;
  }

  const [grid, setGrid] = React.useState(getNewBoard(size));
  const boardRatio = getBoardRatio(size);

  return (
    <div
      style={{
        alignSelf: "start",
        justifySelf: "center",
        width: "80%",
      }}
    >
      <div
        style={{
          position: "relative",
          margin: "1%",
          "&::after": {
            content: `''`,
            display: "block",
            paddingBottom: `${boardRatio * 100}%`,
          },
        }}
      >
        <BottomBoard />
        <Grid grid={grid} />
      </div>
    </div>
  );
};

/**
 * Call the new function of Board, get back the cell pointer and
 * initialize a new array from the memory buffer.
 *
 * @returns {Uint8Array} board
 */
const getNewBoard = (size) => {
  const board = Board.new(size);
  const cellsPtr = board.cells();
  return new Uint8Array(memory.buffer, cellsPtr, size * size);
};

export default PlayBoard;
