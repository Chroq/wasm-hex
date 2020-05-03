import * as React from "react";

const Panel = ({ size, onNewGameAsked, ...props }) => {
  const handleNewGameOnPress = () => {
    onNewGameAsked();
  };

  const style = !size
    ? {
        margin: "auto",
        borderRight: "1px #000 solid",
      }
    : {
        alignSelf: "end",
      };

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, .3)",
        borderLeft: "1px #000 solid",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "100vh",
        width: "20%",
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "1%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "#444",
            fontFamily: "Orbitron, sans-serif",
            fontSize: "2vw",
          }}
        >
          HEX
        </h1>
      </div>

      {!size ? (
        <button
          style={{
            color: "#000",
            cursor: "pointer",
            fontFamily: "Orbitron, sans-serif",
            fontWeight: "600",
            textTransform: "uppercase",
            textDecoration: "none",
            background: "#ffffff",
            padding: "20px",
            border: "4px solid #191919",
            display: "inline-block",
            transition: "all 0.4s ease 0s",
          }}
          onClick={handleNewGameOnPress}
        >
          Start a new game
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Panel;
