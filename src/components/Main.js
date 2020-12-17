import React from "react";
import ClosingTime from "./ClosingTime";
import QueueNr from "./QueueNr";
import Bartenders from "./Bartenders";
import BeerSold from "./BeerSold";
import BeerGraph from "./BeerGraph";

export default function Main({ facts }) {
  return (
    <section className="Main">
      <div className="QueueNr">
        <QueueNr queue={facts.queue}></QueueNr>
      </div>

      <>
        <BeerGraph serving={facts.serving} storage={facts.storage}></BeerGraph>
      </>
      <>
        <Bartenders bartenders={facts.bartenders}></Bartenders>
      </>

      <div className="Sold">
        <BeerSold serving={facts.serving}></BeerSold>
      </div>
      <div className="Closing">
        <ClosingTime bar={facts.bar}></ClosingTime>
      </div>
    </section>
  );
}
