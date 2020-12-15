import React from "react";

export default function TapLevel({ taps }) {
  //Link to CSS-tricks article about html5 progress: https://css-tricks.com/html5-progress-element/
  //console.log(taps);
  let totalTapLeveL = 0;

  taps.forEach((tap) => {
    //console.log(tap);
    totalTapLeveL += tap.level;
  });
  //console.log("TOTAL", totalTapLeveL);

  return (
    <>
      {taps.map((tap, index) => {
        //console.log((tap.level / 100).toString(10).replace(".", ","));
        return (
          <React.Fragment key={index}>
            <label style={{ display: "block" }} htmlFor="tap-level">
              {/* Liter: {tap.level / 100} / {tap.capacity / 100} */}
              Liter: {(tap.level / 100).toString(10).replace(".", ",")} /{" "}
              {tap.capacity / 100}
            </label>
            {/* <label style={{ display: "block" }} for="tap-level">
              Øl tilbage: {tap.level / 50}
            </label> */}
            <progress
              id="tap-level"
              max={tap.capacity}
              value={tap.level}
            ></progress>
            {/* {tap.level < 500 ? <p>Tap #{tap.id} er næsten tom</p> : null}
            {tap.inUse ? <p>Tapper....</p> : <p>Står stille</p>} */}
          </React.Fragment>
        );
      })}
      {/* <p>Samlet mængde tilbage: {totalTapLeveL / 50}</p> */}
      {/* {totalTapLeveL < 1500 ? <p>Snart TOM</p> : null} */}
    </>
  );
}
