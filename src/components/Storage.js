import React from "react";

import TapLevel from "./TapLevel";
import ListContainer from "./ListContainer";

export default function Storage({ taps, storage }) {
  //console.log(taps, storage);

  // taps.forEach((tap) => {
  //   console.log(tap);
  // });
  //console.log(storage.filter((beer) => beer.name === "El Hefe"));
  //console.log("Inside Storage Component", storage, taps);

  //If storage.name === taps.beer {show progress bar}

  //const storageCopy = [...storage];

  //console.log(storage, taps);

  // const tapArray = [];

  //const storageCopy = storage;

  //console.log("storageCopy", storageCopy);

  //console.log(storageCopy.filter((beer) => beer.name === "El Hefe"));

  // taps.forEach((beer) => {
  //   if (taps.beer === storage.name) {
  //   console.log(beer);
  //   tapArray.push(beer);
  //   }
  // });

  // console.log(tapArray);
  // const storageCopy = storage;
  // console.log(storageCopy.filter((beer) => beer.name === "El Hefe"));

  return (
    <>
      {storage !== undefined ? (
        <ListContainer storage={storage} taps={taps} />
      ) : (
        "Loading"
      )}
      {/* {storage !== undefined ? (
        <>
          <ul>
            {storage.map((beer) => {
              return (
                <li key={beer.name}>
                  <h2>{beer.name}</h2>
                  <progress max="2500" value={taps.level}></progress>
                  {beer.name} === {taps.beer} ? <TapLevel taps={taps} />
                  <TapLevel taps={taps} storage={storage} />
                  <h3>Lager</h3>
                  <h3>{beer.amount}</h3>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        "Loading"
      )} */}
    </>
  );
}
