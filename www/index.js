import React from "react";
import ReactDOM from "react-dom";
import * as wasm from "wasm-hex";

const App = () => {
  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
wasm.greet();
