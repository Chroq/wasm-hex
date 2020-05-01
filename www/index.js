import React from "react";
import ReactDOM from "react-dom";
import PlayBoard from "./components/boards/PlayBoard";
import Panel from "./components/panels/Panel";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <PlayBoard />
      <Panel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
