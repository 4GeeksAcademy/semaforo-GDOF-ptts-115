import { useState } from "react";

export const Colores = () => {
  const [color, setColor] = useState();

  return (
    <>
      <div id="semaforoTop"></div>
      <div id="BodySemaforo">
        <div
          className={`light red ${color === "red" ? "selected" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "selected" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "selected" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </>
  );
};