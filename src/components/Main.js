import React, { useState } from "react";
import ClosingTime from "./ClosingTime";
import QueueNr from "./QueueNr";
import Bartenders from "./Bartenders";
import BeerSold2 from "./BeerSold2";
import BeerSoldDup from "./BeerSoldDup";
import BeerSoldDupB from "./BeerSoldDupB";
import BeerSold from "./BeerSold";
import BeerStats from "./BeerStats";
import BeerGraph from "./BeerGraph";

export default function Main({ facts, postSold, getSold }) {
  return (
    <section className="Main">
      <div className="QueueNr">
        <QueueNr queue={facts.queue}></QueueNr>
      </div>

      <>
        <BeerSoldDupB
          getSold={getSold}
          postSold={postSold}
          serving={facts.serving}
          storage={facts.storage}
        ></BeerSoldDupB>
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
