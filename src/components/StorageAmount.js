import React from "react";

export default function StorageAmount({ amount }) {
  console.log(amount);
  return (
    <>
      <div className="amount-container">
        <h3>Lager</h3>
        <div className="amount-background">
          <h3>{amount}</h3>
        </div>
      </div>
      {/* {taps.map((tap) => {
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
      })} */}
    </>
  );
}
