import * as React from "react";
import { Board } from "wasm-hex";
import BottomBoard from "./BottomBoard";
import { memory } from "wasm-hex/wasm_hex_bg";
import Grid from "./Grid";
import { getBoardRatio } from "./position";

const DEFAULT_SIZE = 11;

const PlayBoard = (props) => {
  const [grid, setGrid] = React.useState(getNewBoard(DEFAULT_SIZE));

  const size = Math.sqrt(grid.length);
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
const getNewBoard = () => {
  const board = Board.new();
  const cellsPtr = board.cells();
  return new Uint8Array(memory.buffer, cellsPtr, 11 * 11);
};

export default PlayBoard;
