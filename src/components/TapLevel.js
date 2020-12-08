import React from "react";

export default function TapLevel({ taps }) {
  //Link to CSS-tricks article about progress-element: https://css-tricks.com/html5-progress-element/
  //console.log(taps);
  return (
    <>
      {taps.map((tap, index) => {
        return (
          <React.Fragment key={index}>
            <label style={{ display: "block" }} htmlFor="tap-level">
              Liter: {tap.level / 100} / {tap.capacity / 100}
            </label>
            {/* <label style={{ display: "block" }} for="tap-level">
              Øl tilbage: {tap.level / 50}
            </label> */}
            <progress
              id="tap-level"
              max={tap.capacity}
              value={tap.level}
            ></progress>
          </React.Fragment>
        );
      })}
    </>
  );
}
