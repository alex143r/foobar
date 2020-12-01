import React from "react";

export default function QueueNr({ queue }) {
  console.log(queue);
  return <>{queue !== undefined ? <h1>{queue.length}</h1> : null}</>;
}
