import React from "react";
import ClosingTime from "./ClosingTime";
import QueueNr from "./QueueNr";
import Bartenders from "./Bartenders";
import BeerSold2 from "./BeerSold2";
import QueueHistory from "./QueueHistory";
import BeerSold from "./BeerSold";
import BeerStats from "./BeerStats";

export default function Main({ facts }) {
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
          {facts.length === undefined ? (
            <BeerSold serving={facts.serving}></BeerSold>
          ) : (
            <h1>no</h1>
          )}
        </div>
        <div>
          <ClosingTime bar={facts.bar}></ClosingTime>
        </div>
        <div>
          {facts.length === undefined ? (
            <BeerStats serving={facts.serving}></BeerStats>
          ) : (
            <h1>no</h1>
          )}
        </div>
      </div>
    </main>
  );
}
