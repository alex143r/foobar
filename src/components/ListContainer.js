import React from "react";
import TapLevel from "./TapLevel";
import StorageAmount from "./StorageAmount";

export default function ListContainer({ storage, taps }) {
  //console.log(storage, taps);

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

  const filteredList = fullDataArray.filter((beer) => beer);
  //const filteredList = fullDataArray.filter((beer) => beer.name.length > 10);
  //console.log("LIST", filteredList);

  return (
    <>
      <button>On tap</button>
      <button>Not on tap</button>
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
