import React from "react";

export default function TapLevel({ taps }) {
  //Link to CSS-tricks article about html5 progress: https://css-tricks.com/html5-progress-element/

  return (
    <>
      {taps.map((tap, index) => {
        return (
          <React.Fragment key={index}>
            <label style={{ display: "block" }} htmlFor="tap-level">
              Liter: {(tap.level / 100).toString(10).replace(".", ",")} /{" "}
              {tap.capacity / 100}
            </label>
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
