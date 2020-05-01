import React, { useState } from "react";
import ReactDOM from "react-dom";
import PlayBoard from "./components/boards/PlayBoard";
import Panel from "./components/panels/Panel";

const DEFAULT_SIZE = 11;

const App = () => {
  const [size, setSize] = useState(undefined);

  const onNewGameAsked = () => {
    setSize(DEFAULT_SIZE);
  };

  return (
    <div style={{ display: "flex" }}>
      <PlayBoard size={size} />
      <Panel size={size} onNewGameAsked={onNewGameAsked} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
