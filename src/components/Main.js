import React from "react";
import QueueNr from "./QueueNr";

export default function Main({ facts }) {
  return (
    <main>
      <button className="button1">1</button>
      <button className="button2">2</button>
      <button className="button3">3</button>

      <div className="Main">
        <div>
          <QueueNr queue={facts.queue}></QueueNr>
        </div>
        <div></div>
        <div>Object3</div>
        <div>Object4</div>
      </div>
    </main>
  );
}
