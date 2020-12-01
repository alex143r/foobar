import React from "react";

export default function TapLevel({ taps }) {
  console.log(taps);
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
  );
}
