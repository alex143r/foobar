import React, { useState } from "react";
import TapLevel from "./TapLevel";
import StorageAmount from "./StorageAmount";

export default function ListContainer({ storage, taps }) {
  //console.log(storage, taps);
  // HOOKS
  const [filter, setFilter] = useState("all");
  const [sortKey, setSortKey] = useState("length");
  const [sortDirection, setSortDirection] = useState("desc");

  //Object prototype
  const FullDataObject = {
    name: "",
    amount: null,
    taps: [],
  };

  // Array til data
  let fullDataArray = [];

  //Tilpasning af data til object prototype.
  function prepareObjects(storage) {
    fullDataArray = storage.map(prepareObject);
  }

  function prepareObject(data) {
    const fullData = Object.create(FullDataObject);

    fullData.name = data.name;
    fullData.amount = data.amount;

    //Looper over taps. For hver tap findes den pågældende øl fra storage og indsættes
    taps.map((tap) => {
      if (tap.beer === fullData.name) {
        fullData.taps = [...fullData.taps, { ...tap }];
      }
      return tap;
    });

    return fullData;
  }

  prepareObjects(storage);

  let filteredList = fullDataArray;

  //Tilpasser filteredList til staten af filter
  if (filter !== "all") {
    filteredList = filteredList.filter((beer) =>
      filter ? beer.taps.length > 0 : beer.taps.length === 0
    );
  }

  //Tilpasser filteredList til staten af sortKey
  filteredList = filteredList.sort((a, b) => {
    //Tjekker først om der sorteres efter array-længden på taps.
    if (sortKey === "length") {
      if (a.taps[sortKey] > b.taps[sortKey]) {
        return sortDirection === "asc" ? 1 : -1;
      } else {
        return sortDirection === "asc" ? -1 : 1;
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
      <nav>
        <button
          className={filter === true ? "button-active" : "button-default"}
          onClick={() => setFilter(filter === true ? "all" : true)}
        >
          On Tap
        </button>
        <button
          className={filter === false ? "button-active" : "button-default"}
          onClick={() => setFilter(filter === false ? "all" : false)}
        >
          Not on tap
        </button>
        <select
          sorting={filteredList}
          onChange={(evt) => {
            //Variabel, der bruges til at sætte sortKey og sortDirection
            const userInput = evt.target.value.split(" ");
            //outputtet efter .split(" "):
            // et array hvor index 0 = sortKey og index 1 = sortDirection
            setSortKey(userInput[0]);
            setSortDirection(userInput[1]);
          }}
        >
          <option>Sort:</option>
          <option value="name asc">Name (a-z)</option>
          <option value="name desc">Name (z-a)</option>
          <option value="amount asc">Storage (low-high)</option>
          <option value="amount desc">Storage (high-low)</option>
          <option value="length asc">Number of taps (low-high)</option>
          <option value="length desc">Number of taps (high-low)</option>
        </select>
      </nav>
      <ul>
        {filteredList.map((beer) => {
          return (
            <li
              key={beer.name}
              style={beer.amount === 0 ? { opacity: 0.4 } : { opacity: 1 }}
            >
              <h2 className="list-item-header">{beer.name}</h2>
              <div className="progress-container">
                {beer.taps.length > 0 ? (
                  <TapLevel taps={beer.taps} />
                ) : (
                  <h3>Not on tap</h3>
                )}
              </div>
              <StorageAmount className="storage-amount" amount={beer.amount} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
