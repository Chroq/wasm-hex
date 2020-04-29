import React from "react";
import ReactDOM from "react-dom";
import PlayBoard from "./components/boards/PlayBoard";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <PlayBoard />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
