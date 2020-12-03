import React from "react";
import TapLevel from "./TapLevel";

export default function ListContainer({ storage, taps }) {
  //console.log(storage, taps);

  const filteredList = storage.filter((beer) => beer.name === "El Hefe");
  //console.log(filteredList);

  //const newArr = [];
  // const tapsCurrent = taps.map((tap) => {
  //console.log(tap);
  // const filtered = storage.filter((item) => tap.beer === item.name);
  //console.log(filtered);
  //const newObj = { ...filtered, tap };
  //console.log(newObj);
  //     newArr.push(newObj);
  //   });
  //console.log(newArr);

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

  return (
    <ul>
      {fullDataArray.map((beer) => {
        return (
          <li key={beer.name}>
            <h2>{beer.name}</h2>
            {beer.taps.length > 0 ? (
              beer.taps.map((tap) => {
                return <TapLevel taps={beer.taps} />;
              })
            ) : (
              <p>Not on tap</p>
            )}
            <h3>Lager</h3>
            <h3>{beer.amount}</h3>
          </li>
        );
      })}
    </ul>
  );
}
