import * as React from "react";
import { Board, Cell } from "wasm-hex";
import BottomBoard from "./BottomBoard";
import { memory } from "wasm-hex/wasm_hex_bg";
import Grid from "./Grid";
import { getBoardRatio } from "./position";

const PlayBoard = ({ size, ...props }) => {
  if (!size) {
    return <></>;
  }

  const [board, setBoard] = React.useState(Board.new(size));
  const grid = getGridFromBoard(board, size);
  console.log(grid);

  const boardRatio = getBoardRatio(size);

  React.useEffect(() => {}, [grid]);

  const onMovePlayed = ({ cellIndex }) => {
    setBoard(board.update_cell(parseInt(cellIndex), Cell.White));
  };

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
        <Grid grid={grid} onMovePlayed={onMovePlayed} />
      </div>
    </div>
  );
};

/**
 * This function get back the cells pointer and initialize a new array from the memory buffer.
 *
 * @param {*} board
 * @param {int} size
 */
const getGridFromBoard = (board, size) => {
  const cellsPtr = board.cells();
  return new Uint8Array(memory.buffer, cellsPtr, size * size);
};

export default PlayBoard;
