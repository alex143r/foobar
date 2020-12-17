import React from "react";

export default function StorageAmount({ amount }) {
  return (
    <>
      <div className="amount-container">
        <h3>Lager</h3>
        <div
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
    </>
  );
}
