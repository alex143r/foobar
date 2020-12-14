import React, { useState } from "react";

export default function QueueNr({ queue }) {
  const [count, setCount] = useState(queue.length);
  const [comp, setComp] = useState(false);

  if (count > queue.length) {
    setCount(queue.length);
    setComp(false);
  }
  if (count < queue.length) {
    setCount(queue.length);
    setComp(true);
  }
  return (
    <>
      <h3>Nuværende kø:</h3>
      <div>
        <h1>{count}</h1>
        <div className={comp === true ? "arrowUp" : "arrowDown"}></div>
      </div>
    </>
  );
}
