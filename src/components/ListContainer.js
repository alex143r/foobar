import React, { useState } from "react";
import TapLevel from "./TapLevel";
import StorageAmount from "./StorageAmount";

export default function ListContainer({ storage, taps }) {
  //console.log(storage, taps);
  const [filter, setFilter] = useState("all");
  const [sortKey, setSortKey] = useState("length");
  const [sortDirection, setSortDirection] = useState("asc");

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

  // console.log(
  //   fullDataArray.sort((a, b) => {
  //     console.log(
  //       a.taps.forEach((tap) => console.log("A", tap.level)),
  //       b.taps.forEach((tap) => console.log("B", tap.level))
  //     );
  //   })
  // );

  //console.log("result", result);

  if (filter !== "all") {
    filteredList = fullDataArray.filter(
      (beer) => beer.taps.length > 0 === filter
    );
  }
  //const filteredList = fullDataArray.filter((beer) => beer.name.length > 10);
  //console.log("LIST", filteredList);

  filteredList = filteredList.sort((a, b) => {
    if (sortKey === "length") {
      if (a.taps[sortKey] > b.taps[sortKey]) {
        return -1;
      } else {
        return 1;
      }
    } else if (sortKey === "inUse") {
      console.log("inUSE SORT", a, b.taps[0]);
      if (b.taps[sortKey] - a.taps[sortKey]) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (a[sortKey] > b[sortKey]) {
        return sortDirection === "asc" ? 1 : -1;
      } else {
        return sortDirection === "asc" ? -1 : 1;
      }
    }
  });

  return (
    <>
      {/* <button onClick={() => setFilter("all")}>Filter: All</button> */}
      <button
        className={filter === true ? "button-active" : "button-default"}
        onClick={() => setFilter(filter === true ? "all" : true)}
      >
        On tap
      </button>
      <button
        className={filter === false ? "button-active" : "button-default"}
        onClick={() => setFilter(filter === false ? "all" : false)}
      >
        Not on tap
      </button>

      <button
        onClick={() => {
          setSortKey("name");
          setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        }}
      >
        Sort: Navn
      </button>
      <button
        onClick={() => {
          setSortKey("amount");
          setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        }}
      >
        Sort: Lager
      </button>
      <button onClick={() => setSortKey("length")}>
        Sort: Antal aktive taps
      </button>
      <button onClick={() => setSortKey("inUse")}>Sort: inUse</button>

      <select
        sorting={filteredList}
        onChange={(evt) => {
          console.log("select change", evt.target.value);
          setSortKey(evt.target.value);
          setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        }}
        onClick={(evt) => {
          console.log("CLICK Event", evt.target.value);
        }}
      >
        <option>Sort:</option>
        <option value="name">Navn</option>
        <option value="amount">Lager</option>
        <option value="length">Antal aktive taps</option>
      </select>

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
