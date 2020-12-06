import React from "react";

export default function QueueNr({ queue }) {
  return <>{queue !== undefined ? <h1>{queue.length}</h1> : null}</>;
}
