import * as React from "react";
import { Board, Cell, Player } from "wasm-hex";
import BottomBoard from "./BottomBoard";
import { memory } from "wasm-hex/wasm_hex_bg";
import Grid from "./Grid";
import { getBoardRatio } from "./position";

const PlayBoard = ({ size, ...props }) => {
  if (!size) {
    return <></>;
  }

  const [board, setBoard] = React.useState(Board.new(size));
  const [player, setPlayer] = React.useState(Player.First);

  const grid = getGridFromBoard(board, size);

  const boardRatio = getBoardRatio(size);

  React.useEffect(() => {}, [grid]);

  const onMovePlayed = ({ cellIndex }) => {
    if (player === Player.First) {
      const updatedBoard = board.update_cell(parseInt(cellIndex), player);
      setBoard(updatedBoard);
      setPlayer(updatedBoard.get_player());
    }
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
