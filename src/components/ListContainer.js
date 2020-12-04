import React, { useState } from "react";
import TapLevel from "./TapLevel";
import StorageAmount from "./StorageAmount";

export default function ListContainer({ storage, taps }) {
  //console.log(storage, taps);
  const [filter, setFilter] = useState("all");
  const [sortKey, setSortKey] = useState("name");

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

  filteredList = filteredList.sort((a, b) => {
    if (a[sortKey] > b[sortKey]) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <>
      <button onClick={() => setFilter("all")}>Filter: All</button>
      <button onClick={() => setFilter(true)}>Filter: On tap</button>
      <button onClick={() => setFilter(false)}>Filter: Not on tap</button>

      <button onClick={() => setSortKey("name")}>Sort: Name</button>
      <button onClick={() => setSortKey("amount")}>Sort: Amount</button>
      <button onClick={() => setSortKey("taps")}>Sort: Taps</button>
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
