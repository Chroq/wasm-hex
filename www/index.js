import React from "react";
import ReactDOM from "react-dom";
import BottomBoard from "./components/boards/BottomBoard";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#222222",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "2%",
          height: "80%",
          width: "80%"
        }}
      >
        <BottomBoard />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
