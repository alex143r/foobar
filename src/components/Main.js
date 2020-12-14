import React, { useState } from "react";
import ClosingTime from "./ClosingTime";
import QueueNr from "./QueueNr";
import Bartenders from "./Bartenders";
import BeerSold2 from "./BeerSold2";
import QueueHistory from "./QueueHistory";
import BeerSoldDup from "./BeerSoldDup";
import BeerSoldDupB from "./BeerSoldDupB";
import BeerSold from "./BeerSold";
import BeerStats from "./BeerStats";
import BeerGraph from "./BeerGraph";

export default function Main({ facts }) {
  //console.log(beers);

  return (
    <section className="Main">
      <div className="QueueNr">
        {facts.length === undefined ? (
          <QueueNr queue={facts.queue}></QueueNr>
        ) : (
          <h1>no</h1>
        )}
      </div>

      <div className="Graph">
        {facts.length === undefined ? (
          <BeerSoldDupB
            serving={facts.serving}
            storage={facts.storage}
          ></BeerSoldDupB>
        ) : (
          <h1>no</h1>
        )}
      </div>
      <div className="Bartenders">
        {facts.length === undefined ? (
          <Bartenders bartenders={facts.bartenders}></Bartenders>
        ) : (
          <h1>no</h1>
        )}
      </div>

      <div className="Sold">
        {facts.length === undefined ? (
          <BeerSold serving={facts.serving}></BeerSold>
        ) : (
          <h1>no</h1>
        )}
      </div>
      <div className="Closing">
        <ClosingTime bar={facts.bar}></ClosingTime>
      </div>
    </section>
  );
}
