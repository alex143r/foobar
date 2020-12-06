import React from "react";
import ClosingTime from "./ClosingTime";
import QueueNr from "./QueueNr";
import Bartenders from "./Bartenders";
import BeerSold from "./BeerSold";
import QueueHistory from "./QueueHistory";

export default function Main({ facts, ns }) {
  return (
    <main>
      <div className="Main">
        <div>
          <QueueNr queue={facts.queue}></QueueNr>
        </div>
        <div>
          <QueueHistory queue={facts.queue}></QueueHistory>
        </div>
        <div className="Bartenders">
          <Bartenders bartenders={facts.bartenders}></Bartenders>
        </div>
        <div>
          <BeerSold serving={facts.serving}></BeerSold>
        </div>
        <div>
          <ClosingTime bar={facts.bar}></ClosingTime>
        </div>
      </div>
    </main>
  );
}
