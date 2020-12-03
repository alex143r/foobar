import React from "react";

export default function TapLevel({ taps }) {
  console.log(taps);
  // const newArr = [];
  // const tapBeers = taps.map((tap) => {
  //   console.log(tap);
  //   const found = storage.find((beer) => beer.name === tap.beer);
  //   console.log(found);
  //   if (tap.beer === found.name) {
  //     console.log("Match");
  //     const dataObj = { ...found, ...tap };
  //     console.log(dataObj);
  //     newArr.push(dataObj);
  //   }
  //   return true;
  // });
  //console.log("newArr", newArr);

  //const arr = [];
  //const firstMap = storage.map((item) => {
  //console.log(item);
  //const tapMap = taps.map((tap) => {
  //console.log("FirstMap item", item, "TapMap tap", tap);
  //if (item.name === tap.beer) {
  //console.log("match");
  //const newObj = { ...item, ...tap };
  //console.log("newObj", newObj);
  // }
  //return true;
  // });

  // return true;
  // });

  //const arr = [];
  // const tapsMapping = taps.map((tap) => {
  //   console.log("tap", tap);
  //   const match = storage.find((elm) => tap.beer === elm.name);
  //   console.log("Match", match);
  //   return true;
  // });

  //console.log(taps);

  //taps.forEach((tap) => {
  //console.log(tap);
  // const findMathcingStorageItem = storage.filter(
  //   (type) => type.name === tap.beer
  // );
  //const newObj = { ...findMathcingStorageItem, ...tap };
  //console.log(findMathcingStorageItem);
  //console.log(newObj);
  //});

  // function tapsReducer(totals, item) {
  //   console.log(`Looping over ${item.type}`);
  // }

  // const tapCounts = taps.reduce(tapsReducer, {});

  // const DashboardDataObject = {
  //   name: "",
  //   amount: null,
  //   taps: [];
  // }

  //taps.forEach((tap) => {
  //console.log(tap);
  //const storageMapping = storage.map((item) => {
  //console.log("ITEM", item, "TAP", tap);
  //if (item.name === tap.beer) {
  // const newObj = { ...item, ...tap };
  // console.log("NEW OBJECT", newObj);
  //item = { item, ...tap };
  //console.log(item, "ITEM----");
  //     }
  //   });
  // });

  return (
    <>
      {taps.map((tap) => {
        return (
          <>
            <label style={{ display: "block" }} for="tap-level">
              {tap.level}/{tap.capacity}
            </label>
            <progress
              id="tap-level"
              max={tap.capacity}
              value={tap.level}
            ></progress>
          </>
        );
      })}
    </>
    // <>
    //   <p>HALLO</p>
    // </>
  );
}
