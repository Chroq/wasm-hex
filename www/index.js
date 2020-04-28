import React from "react";
import ReactDOM from "react-dom";
import BottomBoard from "./components/boards/BottomBoard";
import Board from "./components/boards/Board";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#222222",
        display: "flex",
      }}
    >
      <Board />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
