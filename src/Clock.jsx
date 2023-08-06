import React from "react";
import { useState } from "react";

function Clock() {
  const time = new Date().toLocaleTimeString();
  const [current, setCurrent] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrent(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div
      style={{
        border: "2px solid black",
        height: "10vh",
        width: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "700px",
      }}
    >
      {current}
    </div>
  );
}

export default Clock;
