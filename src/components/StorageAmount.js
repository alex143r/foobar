import React from "react";

export default function StorageAmount({ amount }) {
  //console.log(amount);
  return (
    <>
      <div className="amount-container">
        <h3>Lager</h3>
        <div
          // style={
          //   amount < 5
          //     ? { backgroundColor: "red" }
          //     : { backgroundColor: "blue" }
          // }
          //className="amount-background"
          className={
            amount >= 2
              ? "amount-background-green amount-background"
              : amount === 1
              ? "amount-background-orange amount-background"
              : "amount-background-red amount-background"
          }
        >
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
