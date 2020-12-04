import React, { useState } from "react";
import TapLevel from "./TapLevel";
import StorageAmount from "./StorageAmount";

export default function ListContainer({ storage, taps }) {
  //console.log(storage, taps);
  const [filter, setFilter] = useState("all");

  const FullDataObject = {
    name: "",
    amount: null,
    taps: [],
  };

  let fullDataArray = [];

  function prepareObjects(storage) {
    fullDataArray = storage.map(prepareObject);
  }

  function prepareObject(data) {
    //console.log(data);
    const fullData = Object.create(FullDataObject);

    fullData.name = data.name;
    fullData.amount = data.amount;

    taps.map((tap) => {
      //console.log(tap);
      if (tap.beer === fullData.name) {
        fullData.taps = [...fullData.taps, { ...tap }];
      }
    });

    return fullData;
  }

  prepareObjects(storage);
  //console.log("DATA_____", fullDataArray);

  let filteredList = fullDataArray;

  if (filter !== "all") {
    filteredList = fullDataArray.filter(
      (beer) => beer.taps.length > 0 === filter
    );
  }
  //const filteredList = fullDataArray.filter((beer) => beer.name.length > 10);
  //console.log("LIST", filteredList);

  return (
    <>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter(true)}>On tap</button>
      <button onClick={() => setFilter(false)}>Not on tap</button>
      <ul>
        {filteredList.map((beer) => {
          return (
            <li key={beer.name}>
              <h2>{beer.name}</h2>
              <div className="progress-container">
                {beer.taps.length > 0 ? (
                  <TapLevel taps={beer.taps} />
                ) : (
                  <h3>Not on tap</h3>
                )}
              </div>
              {/* <h3>Lager</h3>
            <h3>{beer.amount}</h3> */}
              <StorageAmount amount={beer.amount} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
