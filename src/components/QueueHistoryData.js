import React, { useState } from "react";
import QueueHistory from "./QueueHistory";

export default function QueueHistoryData({ queue, time, serving, tick }) {
  //console.log("Queue: ", queue);
  //console.log("Time: ", time);
  //console.log("Serving: ", serving);

  return (
    <>
      {queue !== undefined ? (
        <QueueHistory tick={tick} queue={queue} serving={serving} />
      ) : (
        "Loading"
      )}
    </>
  );
}
