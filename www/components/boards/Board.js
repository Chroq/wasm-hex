import * as React from "react";
import BottomBoard from "./BottomBoard";

const Board = (props) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "2%",
        height: "80%",
        width: "80%",
      }}
    >
      <BottomBoard />
    </div>
  );
};

export default Board;
