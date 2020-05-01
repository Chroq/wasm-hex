import * as React from "react";

const Panel = (props) => {
  return (
    <div
      style={{
        alignSelf: "end",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .3)",
        borderLeft: "1px #000 solid",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "20%",
      }}
    >
      <div style={{backgroundColor: "#fff", padding: "3% 5%"}} >
        <h1
          style={{
            color: "#444",
            fontFamily: "Orbitron, sans-serif",
            fontSize: "2vw",
          }}
        >
          Hex
        </h1>
      </div>
    </div>
  );
};

export default Panel;
