import React from "react";

import TapLevel from "./TapLevel";

export default function Storage({ storage, taps }) {
  //console.log("Inside Storage Component", storage, taps);

  //   let filteredStorageList = storage.filter((beer) => beer.name === "El Hefe");
  //   console.log(filteredStorageList);
  //console.log(storage.filter((beer) => beer.amount > 3));
  console.log(storage);
  return (
    <>
      {storage !== undefined ? (
        <>
          <button>Sort</button>
          <ul>
            {storage.map((beer) => {
              return (
                <li key={beer.name}>
                  <h2>{beer.name}</h2>
                  {/* <progress max="2500" value={taps.level}></progress> */}
                  {/* {beer.name} === {taps.beer} ? <TapLevel taps={taps} /> */}
                  <TapLevel taps={taps} />
                  <h3>Lager</h3>
                  <h3>{beer.amount}</h3>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
