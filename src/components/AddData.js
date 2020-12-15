import React, { useState } from "react";

export default function AddData(postSold) {
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
      <button onClick={clicked}></button>
    </>
  );
}
