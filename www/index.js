import React from "react";
import ReactDOM from "react-dom";
import * as wasm from "wasm-hex";

ReactDOM.render(<h1>Hi there</h1>, document.getElementById("root"));
wasm.greet();
