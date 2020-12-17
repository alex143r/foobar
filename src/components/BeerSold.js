import React, { useState, useEffect } from "react";
import BeerGraph from "./BeerGraph";

export default function BeerSold({ sold }) {
  const [totalSold, setTotalSold] = useState(initSold);
  function initSold() {
    if (sold !== undefined) {
      return sold;
    }
  }
  useEffect(() => {
    if (sold !== undefined) {
      setTotalSold(sold);
    }
  });

  return (
    <div className="Sold">
      <h3>Beer sold:</h3>
      <h1>{totalSold}</h1>
    </div>
  );
}
